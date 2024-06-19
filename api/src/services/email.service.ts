import { Injectable } from '@nestjs/common';
import { SendSmtpEmail, TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from '@getbrevo/brevo';

export enum EmailTemplates {
  ORDER_ADDED = 1,
  SUCCESSFUL_ORDER = 2,
}

@Injectable()
export class EmailService {
  emailClient = new TransactionalEmailsApi();

  constructor() {
    this.emailClient.setApiKey(TransactionalEmailsApiApiKeys.apiKey, process.env.SIB_API);
  }

  async sendEmailTemplate(template: EmailTemplates, emailAddress: string, recipientName: string) {
    const sendSmtpEmail = new SendSmtpEmail();
    sendSmtpEmail.templateId = template;
    sendSmtpEmail.to = [{ email: emailAddress, name: recipientName }];
    await this.emailClient.sendTransacEmail(sendSmtpEmail);
  }
}
