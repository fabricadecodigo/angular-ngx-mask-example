import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  example = new FormGroup({
    cpf: new FormControl(''),
    date: new FormControl(''),
    phone: new FormControl(''),
    price: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    // Quando a configuração dropSpecialCharacters for igual a false
    // é importante atulizar o formulário com os valores com mascara
    // caso contrario ao salvar novamente, os valoers perderão a mascara
    // this.example.patchValue({
    //   cpf: '123.456.789-99',
    //   date: '21/11/1987',
    //   phone: '+55 32 98888-9999',
    //   price: '1234,99'
    // });
  }

  onSubmit(): void {
    console.log(this.example.value);
  }
}
