import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TermsupComponent } from "./components/termsup/termsup.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TermsupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoAutoE';
}
