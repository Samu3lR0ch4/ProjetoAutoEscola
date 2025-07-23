import { Component } from '@angular/core';
import { MenuloginComponent } from '../../pages/menulogin/menulogin.component';
import { RodapeComponent } from '../../pages/rodape/rodape.component';

@Component({
  selector: 'app-matricula',
  imports: [MenuloginComponent, RodapeComponent],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.css'
})
export class MatriculaComponent {

}
