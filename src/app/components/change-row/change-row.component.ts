import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-row',
  templateUrl: './change-row.component.html',
  styleUrls: ['./change-row.component.css']
})
export class ChangeRowComponent implements OnInit {
  @Output() changeRow: EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.changeRow.emit();
  }

}
