import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input() color: string;
  @Output() onClick? = new EventEmitter<any>();

  onClickBtn(event) {
    this.onClick.emit(event);
  }

}
