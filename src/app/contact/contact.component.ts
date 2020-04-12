import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  user: UserModel;
  
  constructor( private contactService: ContactService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  showSuccess() {
    this.toastr.success('Pronto estaremos en contacto', '¡Recibimos tu mensaje!',{
      timeOut: 2300
    });
  }

  showError() {
    this.toastr.error('No olvides aceptar también el aviso de privacidad', '¡Completa todos los campos!',{
      timeOut: 3000
    });
  }

  sendMessage( contactForm: NgForm){

    console.log(contactForm);

    if( contactForm.invalid){
      console.log('El formulario es invalido');
      this.showError();
        return;
    }          

    this.contactService.postContactForm(this.user).subscribe(resp =>{
      console.log(resp);
      this.showSuccess();
    });
    contactForm.resetForm();
  }

}
