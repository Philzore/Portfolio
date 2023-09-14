import { Component, ViewChild, ElementRef, Input } from '@angular/core';

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

  @Input() sentSuccess = false;
  @Input() nameError = false;
  @Input() mailError = false;
  @Input() messageError = false;

  async sendMail() {
    //
    console.log(this.myForm);
    let nameField = this.nameField.nativeElement; //gleiche wie getElementById
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('mail', mailField.value);

    //send

    await fetch('https://philipp-moessl.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      });

    //check inputs
    console.log(nameField.value);
    if (nameField.value == '') {
      this.nameError = true;
    } else {
      this.nameError = false;
    }
    if (mailField.value == '') {

    }
    if (messageField.value == '') {

    }


    //Nachricht gesendet
    this.sentSuccess = true;
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
