import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  url = 'http://localhost:3000/mental-state-exams'

  constructor(private _http: HttpClient) {

  }

  getAllMentalStateExams(){
    return this._http.get(this.url)
  }

  getMentalStateExamsById(id:any){
    return this._http.get( `${this.url}/${id}`)
  }

}
