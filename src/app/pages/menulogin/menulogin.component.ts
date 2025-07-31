import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulogin',
  imports: [CommonModule, FormsModule],
  templateUrl: './menulogin.component.html',
  styleUrl: './menulogin.component.css'
})
export class MenuloginComponent {
router = inject(Router)



VaparaLogin(){
  sessionStorage.clear()
  this.router.navigate(["loginuser"])
}

    menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


}

