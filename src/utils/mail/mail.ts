import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

import {
  EMAIL_SMTP_HOST,
  EMAIL_SMTP_PASS,
  EMAIL_SMTP_PORT,
  EMAIL_SMTP_USER,
} from '../env';

const transporter = nodemailer.createTransport({
  host: EMAIL_SMTP_HOST,
  port: EMAIL_SMTP_PORT,
  auth: {
    user: EMAIL_SMTP_USER,
    pass: EMAIL_SMTP_PASS,
  },
});

export interface ISendMail {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export const sendMail = async ({ ...mailParams }: ISendMail) => {
  const result = await transporter.sendMail({
    ...mailParams,
  });
  return result;
};

export const renderMailHtml = async (template: string, data: any) => {
  const content = await ejs.renderFile(path.join(__dirname, `templates/${template}`));
  return content;
};
