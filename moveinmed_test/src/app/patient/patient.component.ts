import { Component } from '@angular/core';
import { PatientDatas } from '../patient.entity';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent {
  public patient: PatientDatas = {
    firstName: 'Danielle',
    lastName: 'Hon',
    age: 43 + ' ans',
    sex: 'MALE',
    gender: 'CISGENDER',
    phone: '+33 6 52 25 88 64',
    protocol: 'chimio',
    pathology : 'cancer du sein',
    protocolStartDate: new Date('2023-10-09'),
    birthdayDate: new Date('1980-10-09'),
    referringPractitionerFirstName: 'Josie',
    referringPractitionerLastName: 'BALLARD',
    referringDoctorFirstName :'Alexandre',
    referringDoctorLastName : 'HINTEUR',
  };
}
