import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Entrenamiento Observables';

  constructor( private httpClient: HttpClient){

  }

  ngOnInit(): void {
    console.log('RESULTADO DE LAS PRUEBAS');
    this.obtenerUsuariosDeGitHubPaginados();
  }



  obtenerUsuariosDeGitHubPaginados(){
const urlGitHub = 'https://api.github.com/users?per_page=5';
    this.httpClient.get(urlGitHub).subscribe(respuesta => console.log(respuesta))
    
);
 
}
