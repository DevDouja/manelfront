import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  //iban: FormGroup;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  
    valor1=null;
    valor2=null;
    resultado=null;
    opcion1=false;
    opcion2=false;
    opcion3=false;
    opcion4=false;
 
  constructor(private formBuilder: FormBuilder) {
    this.firstFormGroup = this.formBuilder.group({
      iban:['',Validators.required],
      DNI:['',Validators.required],
      name:['',Validators.required]
  });
}
 
  ngOnInit() {
  
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
