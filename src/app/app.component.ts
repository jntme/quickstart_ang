import { Component } from '@angular/core';

export class Patient {
  pid: number;
  name: string;
  prename: string;
  gender: string;
}

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <br />
  <h2>{{patient.prename}} {{patient.name}}</h2>
  <div>
    <label>Prename: </label> 
    <input [(ngModel)]="patient.prename" placeholder="prename">
  </div>
  <div>
    <label>Name: </label> 
    <input [(ngModel)]="patient.name" placholder="name">
  </div>
  <div><label>PID: </label>{{patient.pid}}</div>
  <div>
    <label>Gender: </label> 
    <input type="text" value={{patient.gender}}>
  </div>
  `,
})
export class AppComponent {
  title = "Patients";

  patient: Patient = {
    pid: 1,
    name: "Brönnimann",
    prename: "Elisabeth",
    gender: "female"
  };

}


