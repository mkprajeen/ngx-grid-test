import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, ElementRef, Output,
   EventEmitter, Input } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { GlobalState } from './../global.state';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'mi-select-am-menu',
  templateUrl: './mi-select-am-menu.component.html',
  styleUrls: ['./mi-select-am-menu.component.scss']
})
export class MiSelectAmMenuComponent implements OnInit, OnDestroy {
  @Input() rowId: string;
  @Input() itmesList: any;
  @ViewChild('matMenu') matMenu: MatMenu;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  // @ViewChild(MatMenu) menu: MatMenu;

  constructor(private _state: GlobalState) { 
  }


  ngOnInit() {
    this._state.subscribe(this.rowId, (user) => {
      this.openSelect(this.trigger);
    });
  }


  openSelect(trg: MatMenuTrigger) {
    trg.openMenu();
    if(trg.menuOpen) {
       this.matMenu.focusFirstItem();
    }
  }

  ngOnDestroy() {
    this._state.unsubscribe(this.rowId);
  }

}
