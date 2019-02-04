import { Component, Input, OnInit, ViewEncapsulation, ViewChild, ElementRef, EventEmitter, HostListener } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { MiDropdownComponent } from './../mi-dropdown/mi-dropdown.component';
import { GlobalState } from './../global.state';

@Component({
  selector: 'app-directory-view',
  templateUrl: './directory-view.component.html',
  styleUrls: ['./directory-view.component.scss'],
})
export class DirectoryViewComponent implements OnInit {
  @Input() queueList: any[];
  status_pair: any[] = [{ id: 1, val: 'Available' }, { id: 2, val: 'Busy' }, { id: 3, val: 'Meeting' }, { id: 4, val: 'Vacation' }];
  

  isSelectOpen: boolean = false;
  myelement: any;
  @ViewChild(DatatableComponent) myDatatable: DatatableComponent;
  @ViewChild('ngSelect') tpl: MiDropdownComponent;


  constructor(private _state: GlobalState) {

  }

  ngOnInit() {

  }

  

 
  private getStatus(): string[] {
    return ["Available", "Busy", "Meeting", "Vacation"];
  }
  private getStatus1(): string[] {
    return this.status_pair;
  }
  private onDownload(event, overlaypanel: OverlayPanel) {
    overlaypanel.toggle(event);
  }

  private openEvent(event) {
    this.isSelectOpen = event;
  }

  onActivate(event) {
    console.log(event);
    // let element = event.rowElement.getElementsByTagName('mi-dropdown');
    // this.myelement = element[0] as HTMLElement;
    this.myelement = event.row;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === 71) {

      console.log('Keyboard short cut:  ' + this.myelement);
      this._state.notifyDataChanged(this.myelement.remoteCallId, 'data');
      // let element = this.myelement.getElementsByTagName('ng-select');
      // console.log(element[0]);
      // element[0].open();
    }
  }
}

