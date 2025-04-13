import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-detail',
  imports: [],
  templateUrl: './work-detail.component.html',
  styleUrl: './work-detail.component.scss'
})
export class WorkDetailComponent {
  constructor(private router: Router) {}

  goToTop() {
    this.router.navigate(['']);
  }
}
