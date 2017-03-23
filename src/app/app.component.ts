import { Component } from '@angular/core';
import { Patient } from './patient';


  const PATIENTS: Patient[] = [
   {pid:1, name: "Brönnimann", prename: "Elisabeth", gender: "female"},
   {pid:2, name: "Specht", prename: "Lisa", gender: "female"},
   {pid:3, name: "Anders", prename: "Anna", gender: "female"},
   {pid:4, name: "Vader", prename: "Leo", gender: "male"},
   {pid:5, name: "Müller", prename: "Otto", gender: "male"},
   {pid:6, name: "Meier", prename: "Eva", gender: "female"},
   {pid:7, name: "Wernert", prename: "Jürgen", gender: "male"},
   {pid:8, name: "Mausing", prename: "Hannes", gender: "male"},
   {pid:9, name: "Spacing", prename: "Trudi", gender: "female"},
   {pid:10, name: "Zehnder", prename: "Willhelm", gender: "male"},
  ];
  
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <br />
  <ul class="patients">
    <li *ngFor="let patient of patients" 
        (click)="onSelect(patient)"
        [class.selected]="patient === selectedPatient">
      <span class="badge">{{patient.pid}}</span> {{patient.name}}
    </li>
  </ul>
  <patient-detail [patient]="selectedPatient"></patient-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .patients {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .patients li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .patients li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .patients li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .patients .text {
      position: relative;
      top: -3px;
    }
    .patients .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = "Patients";

  patients = PATIENTS;

  selectedPatient: Patient;

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }
}



