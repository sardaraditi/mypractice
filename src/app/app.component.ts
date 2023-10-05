import { Component } from '@angular/core'; //impot section

@Component({ //component directive/decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //class to write code here 
  title = 'project';
//let/var/const city= 'pune'
//any Data type
//property
city? : string ; //declaration of property

city2 :string ='pune' //declaration + defination of property

city3 = 'mumbai'
name= 'Aditi'

constructor(){}  // to inject dependencies

//life of hooks

//functions

//life cycle hooks 

  //functions
  
  //string interpolation : one way data binding techniques: .ts to dom/html/template

}
