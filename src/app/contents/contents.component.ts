import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contents',
  imports: [MatButtonModule],
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.scss'
})
export class ContentsComponent {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/menu']);
  }

  goToWork() {
    this.router.navigate(['/work']);
  }
}
