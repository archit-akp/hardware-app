import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-nuts',
  imports: [CommonModule, MatCardModule],
  templateUrl: './nuts.html',
  styleUrl: './nuts.css'
})
export class NutsComponent {

  nutTypes = [
    {
      name: 'Hex Nuts',
      description: '',
      specs: 'Material: Stainless Steel, Sizes: M6-M20, Coating: Zinc-plated'
    },
    {
      name: 'Heavy Hex Nuts',
      description: '',
      specs: 'Material: Mild Steel, Sizes: M8-M16, Finish: Galvanized'
    },
    {
      name: 'Lock Nuts',
      description: '',
      specs: 'Material: Stainless Steel, Sizes: Custom, Load-bearing'
    }
  ];
}
