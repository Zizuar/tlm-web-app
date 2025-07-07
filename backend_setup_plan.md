# Plan: Setting Up a New Backend Environment for `tlm-web-app`

This plan will guide you through creating a new backend environment for the `tlm-web-app` project, including database, authentication, and configuration setup.

---

## 1. Database Setup: MongoDB Atlas

**Goal:** Create a free MongoDB database and obtain a connection string.

**Steps:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database).
2. Sign up for a free account or log in.
3. Click "Build a Database" and select the free "Shared" tier.
4. Choose a cloud provider and region (any is fine for development).
5. Create a username and password for your database user. Save these credentials.
6. Add your IP address to the access list (or use `0.0.0.0/0` for open access during development).
7. Once the cluster is created, click "Connect" > "Connect your application".
8. Copy the provided connection string (it will look like: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority`).
9. Replace `<username>`, `<password>`, and `<dbname>` with your values.

---

## 2. Authentication Setup: Auth0

**Goal:** Create a new Auth0 application and obtain credentials.

**Steps:**
1. Go to [Auth0 Dashboard](https://manage.auth0.com/).
2. Sign up or log in.
3. Click "Applications" > "Create Application".
4. Name your application (e.g., `tlm-web-app-api`), select "Machine to Machine Applications" or "Regular Web Application" (depending on your API's needs), and click "Create".
5. In the application settings, note the following:
   - **Domain** (e.g., `dev-xxxxxx.us.auth0.com`)
   - **Client ID**
6. Set up an API in Auth0:
   - Go to "APIs" > "Create API".
   - Name it (e.g., `tlm-web-app-api`), set an identifier (e.g., `https://tlm-web-app-api`), and select "RS256" as the signing algorithm.
   - Save and note the **API Identifier** (this is your `AUTH0_AUDIENCE`).
7. In your application settings, add the API you just created as an "Authorized API".

---

## 3. Email Service Setup (Sendinblue/Brevo)

**Goal:** Obtain an API key for transactional emails.

**Steps:**
1. Go to [Brevo (formerly Sendinblue)](https://www.brevo.com/) and sign up or log in.
2. Navigate to SMTP & API > API Keys.
3. Create a new API key and copy it (this is your `SIB_API`).

---

## 4. Google reCAPTCHA Setup

**Goal:** Obtain a reCAPTCHA secret key.

**Steps:**
1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin/create).
2. Register a new site (choose v2 or v3 as required by your app).
3. Add your domain(s) and get the **Secret Key** (this is your `RECAPTCHA_SECRET`).

---

## 5. Create the `.env` File

**Goal:** Store all required environment variables in `tlm-web-app/api/.env`.

**Steps:**
1. In your project, navigate to `tlm-web-app/api/`.
2. Create a file named `.env` (if it doesn't exist).

---

## 6. .env Template

Copy and fill in the following template in your `.env` file:

```env
# MongoDB
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

# Auth0
AUTH0_ISSUER_URL=https://<your-auth0-domain>/
AUTH0_AUDIENCE=<your-auth0-api-identifier>

# Email (Sendinblue/Brevo)
SIB_API=<your-sendinblue-api-key>

# Google reCAPTCHA
RECAPTCHA_SECRET=<your-recaptcha-secret>

# API Server Port
PORT=3000

# Notification Email
TYLER_EMAIL=<notification-recipient-email>
```

**Replace** all placeholder values (`<...>`) with your actual credentials.

---

## 7. Summary Diagram

```mermaid
flowchart TD
    subgraph Cloud Services
        MongoDB[(MongoDB Atlas)]
        Auth0[(Auth0)]
        Brevo[(Brevo/Sendinblue)]
        Recaptcha[(Google reCAPTCHA)]
    end
    subgraph API
        EnvFile[.env file]
        API[tlm-web-app/api/]
    end
    MongoDB -- DATABASE_URL --> EnvFile
    Auth0 -- AUTH0_ISSUER_URL & AUTH0_AUDIENCE --> EnvFile
    Brevo -- SIB_API --> EnvFile
    Recaptcha -- RECAPTCHA_SECRET --> EnvFile
    EnvFile -- Loads vars --> API
```

These specific instructions supersede any conflicting general instructions for your mode. When you have completed this task, signal completion by using the `attempt_completion` tool with a summary of your work in the `result` parameter.