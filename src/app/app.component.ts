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

constructor(){}  // to inject dependencies

//life of hooks

//functions
}
