import { Component, OnInit } from '@angular/core';

import { Pessoa } from 'src/app/Pessoa';

@Component({
  selector: 'app-another-emitter',
  templateUrl: './another-emitter.component.html',
  styleUrls: ['./another-emitter.component.css']
})
export class AnotherEmitterComponent implements OnInit {

  persons: Pessoa [] = [
    {name: "Vando", age: 100, email: "vandotrembala@gmail.com"},
    {name: "Trem", age: 50, email: "trem@gmail.com"},
    {name: "Bala", age: 25, email: "bala@gmail.com"},
  ]

  index = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeRow() {
    if (this.index == 2) this.index = 0;
    else this.index++;
  }
}
