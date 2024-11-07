import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('mailField') mailField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;
  @ViewChild('policyCheckbox') policyCheckbox: ElementRef;


  sentSuccess = false;
  nameError = false;
  nameErrorMsgs = ['Name is required', 'Name is to short'];
  nameErrorMsg = '';

  mailError = false;
  mailErrorMsgs = ['Your mail is empty', 'Your mail address ist not plausible'];
  mailErrorMsg = '';

  messageError = false;
  messageErrorMsg = '';

  privacyError = false;
  privacyErrorMsg = '';

  constructor(private header: HeaderComponent) {

  }

  goToAnchor(id: string) {
    this.header.goDown(id);
  }

  async sendMail() {
    this.resetError();
    let nameField = this.nameField.nativeElement; //gleiche wie getElementById
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    this.disableFields(nameField, mailField, messageField, sendButton, true);
    this.checkInputs(nameField, mailField, messageField);

    if (!this.checkErrors()) {
      let fd = new FormData();
      fd.append('name', nameField.value);
      fd.append('message', messageField.value);
      fd.append('mail', mailField.value);
      //send
      await fetch('https://philippmoessl.de/send_mail/send_mail.php', //philippmoessl.de/send_mail.php
        {
          method: 'POST',
          body: fd,
        });

      this.sentSuccess = true;
      this.privacyErrorMsg = 'Mail has been sent';

      this.resetField(nameField, mailField, messageField);
    }

    this.disableFields(nameField, mailField, messageField, sendButton, false);
    
  }

  resetError() {
    this.sentSuccess = false;
    this.nameError = false;
    this.mailError = false;
    this.messageError = false;
    this.privacyError = false;
    this.nameErrorMsg = '';
    this.mailErrorMsg = '';
  }

  resetField(nameField, mailField, messageField) {
    setTimeout(() => {
      nameField.value = '';
      mailField.value = '';
      messageField.value = '';
      this.policyCheckbox.nativeElement.checked = false ;
      this.sentSuccess = false;
      this.privacyErrorMsg = '';
    }, 3000);
  }

  disableFields(nameField, mailField, messageField, sendButton, disable: boolean) {
    nameField.disabled = disable;
    mailField.disabled = disable;
    messageField.disabled = disable;
    sendButton.disabled = disable;
  }

  checkInputs(nameField, mailField, messageField) {
    this.nameErrors(nameField);
    this.mailErrors(mailField);
    this.messageErrors(messageField);
    this.privacyErrors();
  }

  nameErrors(nameField) {
    if (nameField.value == '') {
      this.nameErrorMsg = this.nameErrorMsgs[0];
    } else if (nameField.value.length <= 2) {
      this.nameErrorMsg = this.nameErrorMsgs[1];
    }

    if (this.nameErrorMsg !== '') {
      this.nameError = true;
    } else {
      this.nameError = false;
    }
  }

  mailErrors(mailField) {
    if (mailField.value == '') {
      this.mailErrorMsg = this.mailErrorMsgs[0];
    } else if (!mailField.value.includes('@')) {
      this.mailErrorMsg = this.mailErrorMsgs[1];
    }

    if (this.mailErrorMsg !== '') {
      this.mailError = true;
    } else {
      this.mailError = false;
    }
  }

  messageErrors(messageField) {
    if (messageField.value == '') {
      this.messageErrorMsg = 'Your Message is empty';
      this.messageError = true;
    } else {
      this.messageErrorMsg = '';
      this.messageError = false;
    }
  }

  privacyErrors() {
    let checkbox = this.policyCheckbox.nativeElement;
    if (!checkbox.checked) {
      this.privacyErrorMsg = 'Please accept the privacy policy';
      this.privacyError = true;
    } else {
      this.privacyErrorMsg = '';
      this.privacyError = false;
    }

  }

  checkErrors() {
    return (this.nameError || this.mailError || this.messageError || this.privacyError);
  }

}
