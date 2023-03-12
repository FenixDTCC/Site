import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  mensagem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensagem(): void {
    console.log('E-mail: ', this.email);
    console.log('E-mail: ', this.mensagem);
    alert('Enviado com Sucesso!')
  }
}
