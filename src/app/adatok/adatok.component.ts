import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-adatok',
  templateUrl: './adatok.component.html',
  styleUrls: ['./adatok.component.css']
})
export class AdatokComponent {
// adatok:any=[
//   {id:1, nev:"Micike", faj:"Macska", ar:1000},
//   {id:2, nev:"Mancika", faj:"Kutya", ar:2000},
//   {id:3, nev:"Frici", faj:"Víziló", ar:500},
//   {id:4, nev:"Soma", faj:"Cica", ar:3000}
// ]

// oszlopok:any=["id","nev","faj","ar"]

adatok:any
oszlopok:any=["id","nev","kcal"]

constructor(private base:BaseService){
  this.base.getTodos().subscribe(
   (res)=>this.adatok=res
  )
}

delEtel(allat:any){
  this.base.delData(allat).subscribe(
    ()=>{
      this.base.getTodos().subscribe(
        (res)=>this.adatok=res
       )
    }
  )
}

}
