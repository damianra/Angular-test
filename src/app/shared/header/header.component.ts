import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu = true;  // Controla la visibilidad de los botones del menú
  public listmenu:any = [{'title':'Inicio', 'icon': 'home', 'link': 'inicio'}, 
                         {'title':'Proyectos', 'icon':'business_center', 'link': 'projects'}
                        ];
  public section = 'Inicio'
}
