import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";

export class MailtrapProvider implements IMailProvider {
  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "e0b0b0b0b0b0b0",
        pass: "e0b0b0b0b0b0b0",
      },
    }); // Here we can pass the configuration of the email service
  }
  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
