import { Component, OnInit, Input } from '@angular/core';
import { TextBox } from '../classes/textBox';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input('tb')
  textBox: TextBox

  constructor() { }

  ngOnInit(): void {
  }

}
