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
  size: number = 0;
  isControlVisible:boolean = true;
  isOpen:boolean = false;
  divVisible: boolean = false;
  status_pair: any[] = [{ id: 1, val: 'Available' }, { id: 2, val: 'Busy' }, { id: 3, val: 'Meeting' }, { id: 4, val: 'Vacation' }];


  ngOnInit() {
  }
  element: HTMLElement;
  divclick(sle: HTMLSelectElement) {
    // this.divVisible= !this.divVisible;
    // alert('test: click');
    // console.log("PRajeen");
    // this.element = document.getElementById('midropdown1') as HTMLElement;
    this.size = 10;
    this.tpl.nativeElement.click()
    console.log(this.tpl.nativeElement);

  }
  openSelect(select: NgSelectComponent) {
    select.open();
  }
  private onClick() {
    // this.isControlVisible = !this.isControlVisible;
    this.isOpen = true;
  }


}
