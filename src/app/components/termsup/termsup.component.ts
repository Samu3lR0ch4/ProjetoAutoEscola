import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-termsup',
  imports: [FormsModule, CommonModule],
  templateUrl: './termsup.component.html',
  styleUrls: ['./termsup.component.css']
})
export class TermsupComponent implements OnInit {
  termsAccepted = false;
  showBanner = false;

 ngOnInit(): void {
  if (typeof window !== 'undefined') {
    const accepted = localStorage.getItem('termsAccepted');
    const postponed = sessionStorage.getItem('termsPostponed');

    if (!accepted && !postponed) {
      this.showBanner = true;
    }
  }
}

accept() {
  if (typeof window !== 'undefined') {
    localStorage.setItem('termsAccepted', 'true');
  }
  this.showBanner = false;
}

postpone() {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('termsPostponed', 'true');
  }
  this.showBanner = false;
}
}
