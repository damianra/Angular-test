import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  public listapost:any = []
  constructor(private requestService: RequestService){}
  
  getProyects(){
    this.requestService.getProjects().subscribe({
      next: (response) => { this.listapost = response }
    });
  }

  ngOnInit() {
    this.getProyects();
  }
}
