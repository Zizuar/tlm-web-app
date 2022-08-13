import { Injectable } from '@nestjs/common';
import * as sibApiClient from '@sendinblue/client';

export enum EmailTemplates {
  ORDER_ADDED = 1,
  SUCCESSFUL_ORDER = 2,
}

@Injectable()
export class EmailService {
  sibClient = new sibApiClient.TransactionalEmailsApi();

  constructor() {
    this.sibClient.setApiKey(sibApiClient.TransactionalEmailsApiApiKeys.apiKey, process.env.SIB_API);
  }

  async sendEmailTemplate(template: EmailTemplates, emailAddress: string, recipientName: string) {
    const sendSmtpEmail = new sibApiClient.SendSmtpEmail();
    sendSmtpEmail.templateId = template;
    sendSmtpEmail.to = [{ email: emailAddress, name: recipientName }];
    await this.sibClient.sendTransacEmail(sendSmtpEmail);
  }
}
