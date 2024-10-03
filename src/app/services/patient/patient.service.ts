import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  url = 'http://localhost:3000/patients'

  constructor(private _http: HttpClient) {

  }

  getAllPatients(){
    return this._http.get(this.url)
  }

  getPatientById(id:any){
    return this._http.get( `${this.url}/${id}`)
  }

}
