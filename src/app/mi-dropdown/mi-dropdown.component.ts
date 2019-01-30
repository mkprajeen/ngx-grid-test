import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'mi-dropdown',
  templateUrl: './mi-dropdown.component.html',
  styleUrls: ['./mi-dropdown.component.scss']
})
export class MiDropdownComponent implements OnInit {
  @ViewChild('midropdown1') tpl: ElementRef;
  constructor() { }

  status_pair: any[] = [{ id: 1, val: 'Available' }, { id: 2, val: 'Busy' }, { id: 3, val: 'Meeting' }, { id: 4, val: 'Vacation' }];


  ngOnInit() {
  }

  openSelect(select: NgSelectComponent) {
    select.open();
  }

}
