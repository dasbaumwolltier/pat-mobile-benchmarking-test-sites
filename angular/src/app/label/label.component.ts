import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  @Input('tabId')
  tabId: number = null

  @Input('labelId')
  labelId: number

  @Input('text')
  text: string

  constructor() { }

  ngOnInit(): void {
  }

}
