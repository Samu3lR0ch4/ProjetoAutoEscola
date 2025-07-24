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
    const accepted = localStorage.getItem('termsAccepted');
    const postponed = sessionStorage.getItem('termsPostponed');

    // Só mostra se não aceitou e não adiou na sessão atual
    if (!accepted && !postponed) {
      this.showBanner = true;
    }
  }

  accept() {
    localStorage.setItem('termsAccepted', 'true');
    this.showBanner = false;
  }

  postpone() {
    // Esconde temporariamente para esta sessão
    sessionStorage.setItem('termsPostponed', 'true');
    this.showBanner = false;
  }
}
