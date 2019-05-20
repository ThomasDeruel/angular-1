/*
Configuration
*/

//NodeJs
import { Component, OnInit } from '@angular/core';

//Déclaration
// @Component: décorateur
// selector: générer une balise html qui s'appelle app-root, on va insérer le composant à l'intérieur de la balise html
//templateurl
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
// Export
export class AppComponent implements OnInit {

  /*
  Déclaration
  */
  public title: String; // Typescript
  public dataCollection: Array<any>
  //ou
  //public title = 'test'

  constructor(){
    this.title =" skalala, nous sommes partis :)";
    this.dataCollection = [
      {
      "id": "1493",
      "employee_name": "kiki",
      "employee_salary": "0",
      "employee_age": "0",
      "profile_image": ""
      },
      {
      "id": "1494",
      "employee_name": "AL",
      "employee_salary": "2200",
      "employee_age": "25",
      "profile_image": ""
      },
      {
      "id": "1496",
      "employee_name": "Eminem",
      "employee_salary": "2323",
      "employee_age": "34",
      "profile_image": ""
      },
      {
      "id": "1497",
      "employee_name": "Adam 5",
      "employee_salary": "2727",
      "employee_age": "35",
      "profile_image": ""
      },
      {
      "id": "1500",
      "employee_name": "Adam 8",
      "employee_salary": "1111",
      "employee_age": "35",
      "profile_image": ""
      }
    ]
  }
  /*
  Méthodes
  */
  public sayHello = (name: string) =>{
    alert(`Wesh ${name}`)
  }
  /*
  Hooks
  */
    // eq. DOMContentLoaded
  ngOnInit(): void {
    console.log('composant chargé :)')
  }
  
}
