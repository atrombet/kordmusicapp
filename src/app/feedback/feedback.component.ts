import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmailService } from '../services/EmailService';
import { MessageModel } from '../models/MessageModel';
import { FormControl, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  private _emailService: EmailService;
  private _messageTypes: string[];
  private _deviceTypes: string[];
  @ViewChild('inputCompany') companyField: ElementRef;

  public submitted = false;
  public messageModel: MessageModel;

  // Reactive
  heroForm: FormGroup;

  public constructor(emailService: EmailService, private formBuilder: FormBuilder) {
    this.createForm();
    this._emailService = emailService;
    this.messageModel = new MessageModel();
    this._messageTypes = ['Feature Request', 'Bug Report', 'General Inquiry'];
    this._deviceTypes = ['iOS', 'Android'];
  }

  public ngOnInit(): void {

  }

  public createForm(): void {
    this.heroForm = this.formBuilder.group({
      name: ['', Validators.required ],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }

  public onSubmit() {
    // console.log(
    //   this.messageModel.name, this.messageModel.email, this.messageModel.versionNumber,
    //   this.messageModel.message, this.messageModel.messageType, this.messageModel.deviceType
    // );
    this._emailService.sendFeedback(this.messageModel);
  }

  public get messageTypes(): string[] {
    return this._messageTypes;
  }

  public get deviceTypes(): string[] {
    return this._deviceTypes;
  }

}
