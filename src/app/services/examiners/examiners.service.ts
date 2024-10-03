import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExaminersService {

  url = 'http://localhost:3000/examiners'

  constructor(private _http: HttpClient) {

  }

  getAllExaminers(){
    return this._http.get(this.url)
  }

  getExaminerById(id:any){
    return this._http.get( `${this.url}/${id}`)
  }

}
