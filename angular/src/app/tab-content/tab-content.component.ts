import { Component, OnInit, Input } from '@angular/core';
import { Label } from '../classes/label';
import { Tab } from '../classes/tab';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit {
  @Input('tabId')
  tabId: number

  @Input('activeTab')
  activeTab: number

  @Input('labelData')
  labelData: Array<Label>

  constructor() {
  }

  ngOnInit(): void {
  }

}
