import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-bolts',
  imports: [CommonModule, MatCardModule],
  templateUrl: './bolts.html',
  styleUrl: './bolts.css'
})
export class BoltsComponent {

   boltTypes = [
    {
      name: 'Hex Bolt',
      description: 'A standard hex head bolt used in construction.',
      specs: 'Material: Stainless Steel, Sizes: M6-M20, Coating: Zinc-plated'
    },
    {
      name: 'Carriage Bolt',
      description: 'Round head bolt for wood applications.',
      specs: 'Material: Mild Steel, Sizes: M8-M16, Finish: Galvanized'
    },
    {
      name: 'Eye Bolt',
      description: 'Used to attach cables or ropes.',
      specs: 'Material: Stainless Steel, Sizes: Custom, Load-bearing'
    }
  ];
}
