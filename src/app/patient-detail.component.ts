import { Component, Input } from '@angular/core';
import { Patient } from './patient';

@Component({
    selector: 'patient-detail',
    template: `
    
    <div *ngIf="patient">
        <h2>{{patient.name}} details!</h2>
        <div><label>id: </label>{{patient.pid}}</div>
        <div>
        <label>name: </label>
        <input [(ngModel)]="patient.name" placeholder="name"/>
        </div> 
    </div>
    
    `
    ,
})
export class PatientDetailComponent {

    @Input()
    patient: Patient;
}
