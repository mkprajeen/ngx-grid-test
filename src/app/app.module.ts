import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import  { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule} from '@angular/forms';


import { AbViewComponent } from './ab-view/ab-view.component';
import { DirectoryViewComponent } from './directory-view/directory-view.component'

@NgModule({
  declarations: [
    AppComponent,
    AbViewComponent,
    DirectoryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
