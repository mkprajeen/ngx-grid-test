import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule} from '@angular/forms';



import { AbViewComponent } from './ab-view/ab-view.component';
import { DirectoryViewComponent } from './directory-view/directory-view.component';
import { MiDropdownComponent } from './mi-dropdown/mi-dropdown.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalState } from './global.state';


@NgModule({
  declarations: [
    AppComponent,
    AbViewComponent,
    DirectoryViewComponent,
    MiDropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    OverlayPanelModule,
  ],
  providers: [GlobalState],
  bootstrap: [AppComponent]
})
export class AppModule { }
