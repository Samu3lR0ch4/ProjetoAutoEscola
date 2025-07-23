import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulogin',
  imports: [],
  templateUrl: './menulogin.component.html',
  styleUrl: './menulogin.component.css'
})
export class MenuloginComponent {
router = inject(Router)
VaparaLogin(){
  sessionStorage.clear()
  this.router.navigate(["loginuser"])
}
}
