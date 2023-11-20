import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/etelek/"

  getTodos(){
    return this.http.get(this.url)
  }

  delData(etel:any){
    return this.http.delete(this.url+etel.id)
  }
}
