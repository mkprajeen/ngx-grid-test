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
  @Input() itmesList: any;
  @Output() openState = new EventEmitter<any>();
  @ViewChild('select') tpl: NgSelectComponent;

  private openStateFlg: boolean = false;
  
  constructor(private _state: GlobalState, private hostElement: ElementRef) { 
    
  }

  status_pair: any[] = [{ id: 1, val: 'Available' }, { id: 2, val: 'Busy' }, { id: 3, val: 'Meeting' }, { id: 4, val: 'Vacation' }];
 

  ngOnInit() {
    this._state.subscribe(this.rowId, (user) => {
     // this.tpl.open();
    });
  }


  openSelect(select: NgSelectComponent) {
    if (!this.openStateFlg) {
      select.open();
    } else {
      select.close();
    }
    

  }

  onOpen(event) {
    this.openStateFlg = true;
    this.openState.emit(true);
    console.log('event onOpen');
    console.log(this.openState);
  }
  onClose(event) {
     this.openStateFlg = false;
    this.openState.emit(false);
    console.log('event onClose');
    console.log(this.openState);
    
    console.log(this.hostElement.nativeElement);
    
  }

  onChange(event) {
    console.log('event onChange');
    console.log(event);
  }

  ngOnDestroy() {
    this._state.unsubscribe(this.rowId);
  }

}
