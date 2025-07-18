import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PRODUCTS, Product } from '../../constants/products';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  faWhatsapp = faWhatsapp;
  products: Product[] = PRODUCTS;

  constructor(private router: Router){ }

  goTo(route: string) {
      this.router.navigate([route]);
    }
}
