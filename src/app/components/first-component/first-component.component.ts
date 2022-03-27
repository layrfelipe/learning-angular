import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Layr";
  hobbies = ["play repique", "reading"];
  car = {
    name: "Gol",
    year: 2022
  }

  constructor() { }

  ngOnInit(): void {
  }

}
