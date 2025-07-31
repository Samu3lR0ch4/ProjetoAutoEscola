import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarouselComponent {
  currentSlide = 0;


  slides = [
    {
      title: 'Sua Habilitação com Qualidade',
      subtitle: 'Cursos Completos: 1ª Habilitação, Renovação e Reciclagem.',
      categories: 'Categorias A, B, D e E',
      image: 'catAB.png'
    },
    {
      title: 'Conquiste Sua Liberdade no Volante',
      subtitle: 'Cursos completos, instrutores qualificados e aprovação garantida.',
      categories: 'Comece hoje mesmo sua jornada como motorista!',
      image: 'carrosBG.png'
    }
  ];
  
   
  

  
  goToSlide(index: number) {
    this.currentSlide = index;
  }
  
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}