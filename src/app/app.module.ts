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
import { MiSelectAmMenuComponent } from './mi-select-am-menu/mi-select-am-menu.component';
import { MiSelectAmSelectComponent } from './mi-select-am-select/mi-select-am-select.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalState } from './global.state';
import {
 // MatAutocompleteModule,
 // MatBadgeModule,
 // MatBottomSheetModule,
 // MatButtonModule,
 // MatButtonToggleModule,
 // MatCardModule,
 // MatCheckboxModule,
 // MatChipsModule,
 // MatDatepickerModule,
 // MatDialogModule,
  MatDividerModule,
 // MatExpansionModule,
 // MatGridListModule,
  MatIconModule,
 // MatInputModule,
 // MatListModule,
  MatMenuModule,
 // MatNativeDateModule,
 // MatPaginatorModule,
 // MatProgressBarModule,
 // MatProgressSpinnerModule,
 // MatRadioModule,
 // MatRippleModule,
  MatSelectModule,
 // MatSidenavModule,
 // MatSliderModule,
 // MatSlideToggleModule,
 // MatSnackBarModule,
 // MatSortModule,
 // MatStepperModule,
 // MatTableModule,
 // MatTabsModule,
 // MatToolbarModule,
 // MatTooltipModule,
 // MatTreeModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AbViewComponent,
    DirectoryViewComponent,
    MiDropdownComponent,
    MiSelectAmMenuComponent,
    MiSelectAmSelectComponent
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
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
  ],
  providers: [GlobalState],
  bootstrap: [AppComponent]
})
export class AppModule { }
