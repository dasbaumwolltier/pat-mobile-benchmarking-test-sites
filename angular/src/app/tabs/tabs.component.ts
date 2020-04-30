import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../classes/tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input('tabsData')
  tabs: Array<Tab>
  activeTab: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  showTab(index) {
    this.activeTab = index
  }

  trackById(index, item) {
    return Object['uid'](item)
  }
}
