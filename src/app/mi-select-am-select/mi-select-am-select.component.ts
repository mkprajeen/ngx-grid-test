import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, ElementRef, Output,
   EventEmitter, Input } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { GlobalState } from './../global.state';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'mi-select-am-select',
  templateUrl: './mi-select-am-select.component.html',
  styleUrls: ['./mi-select-am-select.component.scss']
})
export class MiSelectAmSelectComponent implements OnInit, OnDestroy {
  @Input() rowId: string;
  @Input() itmesList: any;
  @Output() openState = new EventEmitter<any>();
  @ViewChild('matSelect') matSelect: MatSelect;
  constructor(private _state: GlobalState) { 
  }


  ngOnInit() {
    this._state.subscribe(this.rowId, (user) => {
      this.openSelect(this.matSelect);
    });
  }


  openSelect(select: MatSelect) {
      select.toggle();
      if (select.panelOpen) {
        select.focus();
      }
  }
  onOpenedChange(event) {
    this.openState.emit(event);
  }
  onSelectionChange(event) {
    console.log('onSelectionChange', event);
  }
  ngOnDestroy() {
    this._state.unsubscribe(this.rowId);
  }

}
