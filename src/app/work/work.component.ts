import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['work/detail']);
  }
}
