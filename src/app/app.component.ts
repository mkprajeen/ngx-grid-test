import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ngx-grid-test';
  @ViewChild('midropdown2') tpl: ElementRef;
  ngOnInit() {
  }

  divclick() {
    this.tpl.nativeElement.click()
    console.log(this.tpl.nativeElement);

  }
  divclick1() {
    //alert('test');
  }
}
