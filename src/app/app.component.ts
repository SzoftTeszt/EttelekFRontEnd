import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Elso';
  name:any= "Attila"
  tomb=["Banán", "Alma", "Eper", "Szőlő"]
  // valtozo:any 
  osztaly="piros"
  
  gyumolcsNev="Ananász"

  hozzaad(){
    
    this.tomb.push(this.gyumolcsNev)
    this.gyumolcsNev=""

    if (this.osztaly=='piros') this.osztaly="zold"
    else this.osztaly='piros'
  }
}
