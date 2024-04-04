import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form = {
    userName : '',
    email: '',
    address: '',
    dateOfBirth: '',
    password: '',
    phone: ''
  }

onSubmit() {
  console.log(this.form);
  alert("Submitted succesfully")
}

}
