import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { GlobalState } from './../global.state';

@Component({
  selector: 'mi-dropdown',
  templateUrl: './mi-dropdown.component.html',
  styleUrls: ['./mi-dropdown.component.scss']
})
export class MiDropdownComponent implements OnInit, OnDestroy {
  @Input() rowId: string;
  @Output() openState = new EventEmitter<any>();
  @ViewChild('select') tpl: NgSelectComponent;
  
  constructor(private _state: GlobalState) { 
    
  }

  status_pair: any[] = [{ id: 1, val: 'Available' }, { id: 2, val: 'Busy' }, { id: 3, val: 'Meeting' }, { id: 4, val: 'Vacation' }];
 

  ngOnInit() {
    this._state.subscribe(this.rowId, (user) => {
      this.tpl.open();
    });
  }

  

  openSelect(select: NgSelectComponent) {
    select.open();
  }

  onOpen(event) {
    // this.openState = true;
    this.openState.emit(true);
    console.log('event onOpen');
    console.log(this.openState);
  }
  onClose(event) {
    // this.openState = false;
    this.openState.emit(false);
    console.log('event onClose');
    console.log(this.openState);
  }

  onChange(event) {
    console.log('event onChange');
    console.log(event);
  }

  ngOnDestroy() {
    this._state.unsubscribe(this.rowId);
  }

}
