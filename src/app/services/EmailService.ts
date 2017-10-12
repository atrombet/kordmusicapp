/// <reference types="aws-sdk" />
import * as aws from 'aws-sdk';
import { SES } from 'aws-sdk';
import { AwsConfig } from '../../awsConfig';
import {Injectable} from '@angular/core';
import {MessageModel} from "../models/MessageModel";

@Injectable()
export class EmailService {

  private _ses: SES;

  public sendFeedback(message: MessageModel): void {
    this.configureEmailService();
    let params = {
      Destination: {
        ToAddresses: [ AwsConfig.destination ]
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: 'From: ' + message.name + '<br>' +
            'Email: ' + message.email + '<br>' +
            'Version: ' + message.versionNumber + '<br>' +
            'Platform: ' + message.deviceType + '<br>' +
            'Message Type: ' + message.messageType + '<br>' +
            'Message: ' + message.message
          },
          Text: {
            Charset: 'UTF-8',
            Data: ''
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Kord - ' + message.messageType
        }
      },
      Source: AwsConfig.source
    };
    this.callSES(params);
  }

  private callSES(params): void {
    this._ses.sendEmail(params, (err) => {
      if (err) {
        console.log(err, err.stack);
      }
    });
  }

  private configureEmailService(): void {
    aws.config.credentials = {
      accessKeyId: AwsConfig.accessKeyId,
      secretAccessKey: AwsConfig.secretAccessKey
    };
    aws.config.update({
      region: AwsConfig.region
    });
    this._ses = new SES({
      apiVersion: '2010-12-01'
    });
  }

}
