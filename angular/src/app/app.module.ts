import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LabelComponent } from './label/label.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { TabsComponent } from './tabs/tabs.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    TabContentComponent,
    TabButtonComponent,
    TabsComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
