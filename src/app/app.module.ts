import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AeChartsComponent } from './ae-charts/ae-charts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {  AngularEchartsModule   } from 'ngx-echarts';
import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbCardModule } from '@nebular/theme';




@NgModule({
  declarations: [
    AppComponent,
    AeChartsComponent
  ],
  imports: [
    BrowserModule,
    AngularEchartsModule ,
    NbCardModule,
    NbLayoutModule,
    NbSidebarModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NgbModule.forRoot()
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
