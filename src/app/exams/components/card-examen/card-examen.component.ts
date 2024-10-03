import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MentalStateExam} from "../../../models/MentalStateExam";
import {PatientService} from "../../../services/patient/patient.service";
import {Patient} from "../../../models/Patient";
import {Examiner} from "../../../models/Examiner";
import {ExaminersService} from "../../../services/examiners/examiners.service";

@Component({
  selector: 'app-card-examen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-examen.component.html',
  styleUrl: './card-examen.component.css'
})
export class CardExamenComponent implements OnInit{

  @Input() mentalStateExam !: MentalStateExam;

  patient !: Patient
  examiner !:Examiner

  constructor(private _patientService:PatientService,
              private _examinerService:ExaminersService) {

  }

  ngOnInit(){
      this.getPatient()
      this.getExaminer()
  }

  totalScore(mentalStateExam:MentalStateExam){
    return mentalStateExam.orientationScore + mentalStateExam.registrationScore +
      mentalStateExam.attentionAndCalculationScore + mentalStateExam.recallScore +
      mentalStateExam.languageScore;
  }

  getPatient(){

    this._patientService.getPatientById(this.mentalStateExam.patientId).subscribe((response:any)=>{
      this.patient = response
    })
  }

  getExaminer(){
    this._examinerService.getExaminerById(this.mentalStateExam.examinerId).subscribe((response:any)=>{
      this.examiner = response
    })
  }
}
