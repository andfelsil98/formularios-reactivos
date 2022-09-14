import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-forms';

  public formLogin: FormGroup; //primero se crea una variabnle publica y se le asigna el tipo formgroup. sera la variable que llamemos en el html

  constructor(
    private formBuilder: FormBuilder
  ) { //lineas para inicializar un formgroup
    this.formLogin = formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {//en estas lineas estamos construyendo un grupos de inputs que seran almacenados en formlogin
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], //en estos campos estoy validando que los campos sean requeridos sin tener que ponerlo en el html, en el primer caso quiero validar primero si es valido y segun si es un email.
      password: ['', [Validators.required, Validators.minLength(4)]],
      terms: ['', [Validators.required, Validators.requiredTrue]]
    });
    this.loadApi();
  }


// funcion para precargar informacion en los input de mi formulario. en la primera parte estoy inicializando los datos que quiero precargar, en la segunda parte esty usando patchvalue precisamente para actualizar el input y ponerle dichos valores
  loadApi() {
    const response = {
      email: 'andres@hotmail.com',
      password: '12345',
      terms: false
    };

    this.formLogin.patchValue(
      //{ //los valores se pueden pasar 1 por 1
      // email: response.email,
      // password: response.password,
      // terms: response.terms
      response //o el objeto completo de ambas formas funciona
    //}
    )
  }

  send(): any {
    console.log(this.formLogin.value); //toma la informacion del fomulario y la imprime en consola
  }
}
