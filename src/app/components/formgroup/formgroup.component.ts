import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.scss']
})
export class FormgroupComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(""),
    phone: new FormControl(""),
    color: new FormControl("#000000"),
    date: new FormControl(""),
    age: new FormControl(12),
    range: new FormControl(""),
    category: new FormControl("category-2"),
    tag: new FormControl(""),
    agree: new FormControl(false),
    gender: new FormControl(""),
    zone: new FormControl(""),
  })


  constructor() { }

  ngOnInit(): void {
  }

  getNameValue() {
    console.log(this.nameField?.value); //tomando el valor de forma no reactiva solo cuando se llama al metodo por algun evento
  }

  save(event: Event) {
    console.log(this.form.value);
  }

  //GETTERS

  get nameField() {
    return this.form.get('name');
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get rangeField() {
    return this.form.get('range');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }



  //getters para hacer validaciones del formulario y evitar estar escribiendo lo mismo en varios lugares
  get isNameFieldValid() {
    return this.nameField?.touched && this.nameField?.valid;
  }

  get isNameFieldInValid() {
    return this.nameField?.touched && this.nameField?.invalid;
  }

}
