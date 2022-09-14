import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-platziforms',
  templateUrl: './platziforms.component.html',
  styleUrls: ['./platziforms.component.scss']
})
export class PlatziformsComponent implements OnInit {
//FORM CONTROL
  nameField = new FormControl("", [Validators.required, Validators.maxLength(10)]); //tienen por defecto tres posibles entradas (valor por defecto, validaciones sicronas, validaciones asincronas) pueden ser una o varias validaciones ([validacion1, validacion2,..., validacionN])
  emailField = new FormControl("");
  phoneField = new FormControl("");
  colorField = new FormControl("#000000");
  dateField = new FormControl("");
  ageField = new FormControl(12);
  rangeField = new FormControl("");

  categoryField = new FormControl("category-2");
  tagField = new FormControl("");

  agreeField = new FormControl(false);
  genderField = new FormControl("");
  zoneField = new FormControl("");


  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges //con value changes estoy haciendo que los inputs sean reactivos. me suscribo para estar pendiente todo el tiempo de los cambios (watcher)
    .subscribe ( value => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value); //tomando el valor de forma no reactiva solo cuando se llama al metodo por algun evento
  }
//getters para hacer validaciones del formulario y evitar estar escribiendo lo mismo en varios lugares
  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInValid() {
    return this.nameField.touched && this.nameField.invalid;
  }


}
