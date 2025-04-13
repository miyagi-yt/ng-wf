import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contents',
  imports: [],
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
