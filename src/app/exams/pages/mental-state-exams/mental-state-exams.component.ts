import {Component, OnInit} from '@angular/core';
import {CardExamenComponent} from "../../components/card-examen/card-examen.component";
import {PatientService} from "../../../services/patient/patient.service";
import {ExamsService} from "../../../services/exams/exams.service";
import {ExaminersService} from "../../../services/examiners/examiners.service";
import {MentalStateExam} from "../../../models/MentalStateExam";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-mental-state-exams',
  standalone: true,
  imports: [
    CardExamenComponent, CommonModule
  ],
  templateUrl: './mental-state-exams.component.html',
  styleUrl: './mental-state-exams.component.css'
})
export class MentalStateExamsComponent implements OnInit{

  mentalStateExams:MentalStateExam[]=[]

  constructor(private _patientService:PatientService,
              private _examService:ExamsService,
              private _examinerService:ExaminersService) {

  }

  ngOnInit() {
    this._examService.getAllMentalStateExams().subscribe((response:any)=>{
      this.mentalStateExams = response;

      console.log(this.mentalStateExams)
    })
  }



}
