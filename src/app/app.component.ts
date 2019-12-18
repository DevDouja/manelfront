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
 
  constructor(public formBuilder: FormBuilder) {
    }
 
  ngOnInit() {
  
    this.firstFormGroup = this.formBuilder.group({
      iban: ['', [Validators.required] && [Validators.pattern('^[0-9]{14,}$')]],
      nombre: ['', Validators.required],
      DNI:['',[Validators.required] && [Validators.pattern('^[0-9]{8}[A-Z]{1}$')]],
      valorContinente:['',[Validators.required]&&[Validators.pattern('^[0-9]{5,}$')]],
      fechaVigor: ['',[Validators.required]],
      localizacionVivienda: ['',Validators.required],
      codigoPostal: ['',[Validators.required]&&[Validators.pattern('^((0[1-9]|5[0-2])|[1-4][0-9])[0-9]{3}$')]],
      ciudad: ['',Validators.required],
      integrantesVivienda: ['',Validators.required],
      numeroHijos: ['',Validators.required]
      
    });
    this.secondFormGroup = this.formBuilder.group({
      direccion: ['', Validators.required],
      tipoVivienda: ['', Validators.required],
      tipoConstruccion: ['', Validators.required],
      anoConstruccion: ['', [Validators.required] && [Validators.pattern('^[0-9]{4,}$')]],
      superficieConstruida: ['', [Validators.required]&&[Validators.pattern('^[0-9]{2,}$')]]
      
    });
  }
}
