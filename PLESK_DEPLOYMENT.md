# Plesk Deployment Guide for The Last Midnight

## Introduction

This guide provides step-by-step instructions for deploying the The Last Midnight application to a Plesk server. The deployment strategy consists of two main parts:

1.  **Backend API:** Deployed as a Docker container using the Plesk Docker extension.
2.  **Frontend & Admin Apps:** Deployed as static websites.

Following these instructions will ensure a smooth and successful deployment.

## Prerequisites

Before you begin, ensure you have the following:

*   **Plesk Obsidian:** Access to a Plesk Obsidian control panel.
*   **Node.js & npm:** Required for building the frontend applications.
*   **Docker:** The Docker extension for Plesk must be installed and running.
*   **Domain/Subdomains:** You should have your primary domain and any subdomains (e.g., `admin.yourdomain.com`) ready.

---

## Part 1: Plesk Docker Setup (For First-Time Use)

If you haven't used Docker on your Plesk server before, you'll need to install the extension first.

1.  **Log in to Plesk.**
2.  Navigate to **Extensions** from the left-hand sidebar.
3.  In the **Extensions Catalog**, use the search bar to find "**Docker**".
4.  Click on the Docker extension and select **Get it free** to install it.

Once installed, "Docker" will appear in your left-hand sidebar, ready for use.

---

### Cloning the Repository with Plesk Git

Before deploying the API, you can use the Plesk Git extension to clone the repository directly to your server. This is the recommended approach.

1.  **Add a New Domain for the API:**
    *   In Plesk, go to **Websites & Domains** and click **Add Domain**.
    *   Choose a subdomain for your API (e.g., `api.yourdomain.com`).
    *   Complete the setup process.

2.  **Navigate to the Git Extension:**
    *   Go to the dashboard for your newly created API domain.
    *   Find and click on the **Git** icon.

3.  **Clone the Repository:**
    *   Select **Remote Git Hosting** (like GitHub, Bitbucket).
    *   In the **Repository URL** field, enter the Git URL of your project (e.g., `git@github.com:your-username/your-repo.git`).
    *   If your repository is private, you will need to add an SSH key. Plesk will generate one for you, which you can then add to your Git hosting provider's SSH keys.

4.  **Configure Deployment Settings:**
    *   **Deployment mode:** Set this to **Manual**. This gives you control over when to deploy changes.
    *   **Deployment directory:** Specify the directory where the code should be deployed (e.g., `/httpdocs/api`). This should match the path you intend to use for the Docker container.

5.  Click **OK** to clone the repository. Once cloned, you can pull the latest changes at any time from the Plesk Git interface.

---

## Part 2: API Deployment (Docker)

The backend API is designed to run in a Docker container, managed by Plesk.

### Step 1: Upload API Project

1.  Connect to your server via FTP/SFTP or use the Plesk File Manager.
2.  Upload the entire `api` folder from this project to a location on your server (e.g., `/var/www/vhosts/yourdomain.com/httpdocs/api`).

### Step 2: Build and Run the Docker Image

1.  In Plesk, go to **Docker** from the left-hand sidebar.
2.  Click **Add Container**.
3.  In the "Image" field, select **Build from Dockerfile**.
4.  For the **Path to Dockerfile**, navigate to the `api` folder you uploaded (e.g., `/var/www/vhosts/yourdomain.com/httpdocs/api`).
5.  Plesk will automatically detect the `Dockerfile` and build the image. This may take a few minutes.

### Step 3: Configure Port Mapping

Once the image is built, you need to map the container's internal port to an external port on the server.

1.  In the container's settings page, find the **Port mapping** section.
2.  The container exposes port `3000`. You need to map this to an available external port. A common practice is to use a high-numbered port (e.g., `3001` or similar).
    *   **Internal Port:** `3000`
    *   **External Port:** (e.g., `3001`)
3.  Ensure the port mapping is enabled by checking the box next to it.

### Step 4: Set Environment Variables

This is a **critical** step. The API requires environment variables from the `.env` file to run correctly.

1.  In the container's settings, locate the **Environment variables** section.
2.  For each variable in your local `.env` file (e.g., `DATABASE_URL`, `JWT_SECRET`, etc.), you must add it here:
    *   Click **Add Variable**.
    *   **Variable Name:** The name of the key (e.g., `DATABASE_URL`).
    *   **Value:** The corresponding value from your `.env` file.
3.  **Do not upload the `.env` file itself.** Add each variable one by one. This keeps your secrets secure.
4.  Once all variables are added, click **OK** or **Save** to apply the settings and start the container.

---

## Part 3: Frontend & Admin App Deployment

The `frontend` and `admin` applications are built as static sites and can be hosted in standard web directories.

### Step 1: Build Applications for Production

On your local machine, run the following commands to build the production-ready assets:

```bash
# Build the admin application
cd admin
npm install
npm run build

# Build the main frontend application
cd ../frontend
npm install
npm run build
```

These commands will generate a `dist/` folder in both the `admin` and `frontend` directories.

### Step 2: Upload `dist/` Contents

1.  **Admin App:**
    *   Using FTP or the Plesk File Manager, navigate to the web root for your admin subdomain (e.g., `admin.yourdomain.com`).
    *   Upload the **contents** of the `tlm-web-app/admin/dist/` folder to this directory.

2.  **Frontend App:**
    *   Navigate to the web root for your main domain (e.g., `yourdomain.com`).
    *   Upload the **contents** of the `tlm-web-app/frontend/dist/` folder to this directory.

---

## Part 4: To-Do List for Launch

This is the final checklist before your site goes live.

*   [ ] **Acquire Domain Names:**
    *   Purchase your primary domain and set up the `admin` subdomain.

*   [ ] **Set Up DNS Records:**
    *   Point your domain's A record to the Plesk server's IP address.
    *   Create a CNAME or A record for your `admin` subdomain.

*   [ ] **Replace Placeholder URLs:**
    *   In `tlm-web-app/admin/src/environments/environment.prod.ts` and `tlm-web-app/frontend/src/environments/environment.prod.ts`, replace `https://api.yourdomain.com` with your actual API domain.
    *   Re-build and re-upload the `admin` and `frontend` apps after making these changes.

*   [ ] **Configure SSL/TLS:**
    *   In Plesk, navigate to the hosting settings for your domain and subdomain.
    *   Use the Let's Encrypt extension (or upload your own certificate) to secure your sites with SSL/TLS. This is crucial for security and user trust.

*   [ ] **Final Testing:**
    *   Browse to your live domain and admin panel to ensure everything is working correctly.
    *   Test user registration, login, and other key features.

Congratulations! Your application is now deployed.

---

### Recommended Cloudflare DNS Configuration

Below are the recommended DNS records to configure in Cloudflare for your domain.

*   **Server IP Address:** `192.0.2.123` (Replace with your actual server IP)

#### Core Applications

| Type    | Name            | Content                     |
| :------ | :-------------- | :-------------------------- |
| `A`     | `tylerlevs.com`   | `192.0.2.123`               |
| `CNAME` | `www`           | `tylerlevs.com`               |
| `A`     | `admin`         | `192.0.2.123`               |
| `A`     | `api`           | `192.0.2.123`               |

#### Email (Brevo)

| Type    | Name                | Content                         |
| :------ | :------------------ | :------------------------------ |
| `TXT`   | `tylerlevs.com`       | `brevo-code:xxxxxxxxxxxxxxxxxxxx` |
| `TXT`   | `tylerlevs.com`       | `v=spf1 include:sendinblue.com ~all` |
| `CNAME` | `mail._domainkey`   | `dkim.brevo.com`                |

#### Auth0 Verification

| Type    | Name   | Content                         |
| :------ | :----- | :------------------------------ |
| `CNAME` | `auth` | `auth.yourdomain.com.auth0.com` |