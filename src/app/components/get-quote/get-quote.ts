import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RecaptchaModule } from 'ng-recaptcha';


@Component({
  selector: 'app-get-quote',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule, RecaptchaModule],
  templateUrl: './get-quote.html',
  styleUrl: './get-quote.css'
})
export class GetQuoteComponent {
  quoteForm: FormGroup;
  captchaVerified: boolean = false;

  constructor(private form: FormBuilder){
    this.quoteForm = this.form.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onCaptchaResolved(token: any) {
  console.log('CAPTCHA resolved with token:', token);
  this.captchaVerified = true;
}

  submitQuote(){
    if (this.quoteForm.valid && this.captchaVerified) {
      console.log('Qupte Request', this.quoteForm.value);
      const form = this.quoteForm.value;
      const message =
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Email: ${encodeURIComponent(form.email)}%0A` +
      `Description: ${encodeURIComponent(form.description)}`;
      const phoneNumber = '919004242554';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
       window.open(whatsappUrl, '_blank');

      alert("Quote Submitted Successfully");
      this.quoteForm.reset();
      this.captchaVerified = false;
    } else {
      this.quoteForm.markAllAsTouched();
    }
  }

}
