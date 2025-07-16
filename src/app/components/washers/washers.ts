import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-washers',
  imports: [CommonModule, MatCardModule],
  templateUrl: './washers.html',
  styleUrl: './washers.css'
})
export class WashersComponent {

  washersTypes = [
    {
      name: 'Standard Washers',
      description: '',
      specs: 'Material: Stainless Steel, Sizes: M6-M20, Coating: Zinc-plated'
    },
    {
      name: 'Round Plate Washers',
      description: '',
      specs: 'Material: Mild Steel, Sizes: M8-M16, Finish: Galvanized'
    },
    {
      name: 'Spacers',
      description: '',
      specs: 'Material: Stainless Steel, Sizes: Custom, Load-bearing'
    }
  ];
}
