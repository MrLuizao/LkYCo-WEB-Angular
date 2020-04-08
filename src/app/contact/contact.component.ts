import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user={
    name: '',
    email: '',
    message: ''
  }
  

  constructor() { }

  ngOnInit() {
  }

  sendMessage( contactForm: NgForm){
    // alert('MÉTODO PARA ENVIAR EL FORMULARIO DE CONTACTO')
    console.log(contactForm);
  }

}
