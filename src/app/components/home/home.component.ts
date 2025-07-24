import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuloginComponent } from '../../pages/menulogin/menulogin.component';
import { CarouselComponent, } from '../carrousel/carrousel.component';
import { CardsComponent } from '../../pages/cards/cards.component';
import { RodapeComponent } from '../../pages/rodape/rodape.component';
import { TermosComponent } from '../../pages/termos/termos.component';
import { TermsupComponent } from '../termsup/termsup.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MenuloginComponent, CarouselComponent, CardsComponent, RodapeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
