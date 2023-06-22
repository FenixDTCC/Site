/* import { HomeComponent } from './../../home/home.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrese',
  templateUrl: './registrese.component.html',
  styleUrls: ['./registrese.component.css']
})
export class RegistreseComponent implements OnInit {

  cnpj: string = '';
  razaosocial: string = '';
  nomefantasia: string = '';
  pessoadecontato: string = '';
  telefone: string = '';
  email: string = '';
  logradouro: string = '';
  numero: string = '';
  bairro: string = '';
  cep: string = '';
  cidade: string = '';
  estado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensagem(): void {
    console.log('CNPJ: ', this.cnpj);
    console.log('Razão Social: ', this.razaosocial);
    console.log('Nome Fantasia: ', this.nomefantasia);
    console.log('Pessoa de Contato: ', this.pessoadecontato);
    console.log('Telefone: ', this.telefone);
    console.log('email: ', this.email);
    console.log('logradouro: ', this.logradouro);
    console.log('Número: ', this.numero);
    console.log('Bairro: ', this.bairro);
    console.log('CEP: ', this.cep);
    console.log('Cidade: ', this.cidade);
    console.log('Estado: ', this.estado);

    alert('Cadastrado com Sucesso!');
  };
}
*/
