import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActiveuserComponent } from './shared/component/activeuser/activeuser.component';
import { InactiveComponent } from './shared/component/inactive/inactive.component';
import { PendingComponent } from './shared/component/pending/pending.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveuserComponent,
    InactiveComponent,
    PendingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
