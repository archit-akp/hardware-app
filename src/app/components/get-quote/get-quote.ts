import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-get-quote',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTabsModule],
  templateUrl: './get-quote.html',
  styleUrl: './get-quote.css'
})
export class GetQuoteComponent {
  quoteForm: FormGroup;

  constructor(private form: FormBuilder){
    this.quoteForm = this.form.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submitQuote(){
    if (this.quoteForm.valid) {
      console.log('Qupte Request', this.quoteForm.value);
      alert("Quote Submitted Successfully");
      this.quoteForm.reset();
    } else {
      this.quoteForm.markAllAsTouched();
    }
  }

}
