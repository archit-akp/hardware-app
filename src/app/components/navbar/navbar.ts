import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
   selectedIndex = 0;
   
   constructor(private router: Router) {}

    ngOnInit(): void {
    const path = this.router.url.split('?')[0]; // remove query parameters
    const routeToIndex: Record<string, number> = {
      '/': 0,
      '/about': 1,
      '/quote': 2
    };
    this.selectedIndex = routeToIndex[path] ?? 0;
  }

   onTabChange(index: number): void {
    const indexToRoute = ['/', '/about', '/quote'];
    this.router.navigate([indexToRoute[index]]);
  }

}
