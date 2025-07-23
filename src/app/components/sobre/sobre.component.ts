import { Component } from '@angular/core';
import { MenuloginComponent } from '../../pages/menulogin/menulogin.component';
import { RodapeComponent } from '../../pages/rodape/rodape.component';

@Component({
  selector: 'app-sobre',
  imports: [MenuloginComponent, RodapeComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
