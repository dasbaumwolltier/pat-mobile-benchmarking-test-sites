import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.css']
})
export class TabButtonComponent implements OnInit {
  @Input('tabId')
  tabId: number

  @Output('onActivate')
  onActivate: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  c() {
    this.onActivate.emit(this.tabId)
  }
}
