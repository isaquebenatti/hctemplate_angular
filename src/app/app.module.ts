import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddtemplateComponent } from './addtemplate/addtemplate.component';
import { AgentComponent } from './addtemplate/agent/agent.component';
import { AddtemplateService} from './addtemplate/addtemplate.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddtemplateComponent,
    AgentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AddtemplateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
