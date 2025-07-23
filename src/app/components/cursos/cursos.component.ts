import { Component } from '@angular/core';
import { MenuloginComponent } from '../../pages/menulogin/menulogin.component';
import { RodapeComponent } from '../../pages/rodape/rodape.component';

@Component({
  selector: 'app-cursos',
  imports: [MenuloginComponent,RodapeComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

}
