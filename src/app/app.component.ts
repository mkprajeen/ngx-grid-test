import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ngx-grid-test';
  private queueList: QueueCall[] = [];
  strArry: string[] = ["Available", "Busy", "Meeting", "Vacation"];
  @ViewChild('midropdown2') tpl: ElementRef;
  ngOnInit() {
    this.fillQueuelist();
  }

  divclick() {
    this.tpl.nativeElement.click()
    console.log(this.tpl.nativeElement);

  }
  private fillQueuelist() {
    let qlist : QueueCall[] = [];
    qlist.push({ remoteCallId: '1', calledName: 'Call1', waitTime: 0, stateName: 'Queued', timestamp: 10, isRecall: false, status: this.strArry });
    qlist.push({ remoteCallId: '2', calledName: 'Call2', waitTime: 0, stateName: 'Queued', timestamp: 20, isRecall: false, status: this.strArry });
    qlist.push({ remoteCallId: '3', calledName: 'Call3', waitTime: 0, stateName: 'Parked', timestamp: 10, isRecall: false, status: this.strArry });
    qlist.push({ remoteCallId: '4', calledName: 'Call4', waitTime: 0, stateName: 'Parked', timestamp: 20, isRecall: false, status: this.strArry });
    qlist.push({ remoteCallId: '5', calledName: 'Call5', waitTime: 0, stateName: 'Recall', timestamp: 10, isRecall: true, status: this.strArry });
    qlist.push({ remoteCallId: '6', calledName: 'Call6', waitTime: 0, stateName: 'Recall', timestamp: 20, isRecall: true, status: this.strArry });
    qlist.push({ remoteCallId: '7', calledName: 'Call7', waitTime: 0, stateName: 'Queued', timestamp: 10, isRecall: false, status: this.strArry });
    qlist.push({ remoteCallId: '8', calledName: 'Call8', waitTime: 0, stateName: 'Parked', timestamp: 10, isRecall: false, status: this.strArry });
    qlist.push({ remoteCallId: '9', calledName: 'Call9', waitTime: 0, stateName: 'Recall', timestamp: 10, isRecall: true, status: this.strArry });
    qlist.push({ remoteCallId: '10', calledName: 'Call10', waitTime: 0, stateName: 'Parked', timestamp: 30, isRecall: false, status: this.strArry });
    qlist.push({ remoteCallId: '11', calledName: 'Call11', waitTime: 0, stateName: 'Queued', timestamp: 50, isRecall: false, status: this.strArry });
    qlist.push({ remoteCallId: '12', calledName: 'Call12', waitTime: 0, stateName: 'Recall', timestamp: 50, isRecall: true, status: this.strArry });
  this.queueList = qlist;
  }

  private clearList() {
    this.queueList = [];
  }
}
export class QueueCall {
  remoteCallId: string;
  calledName: string;
  waitTime: number;
  stateName: string;
  timestamp: number;
  isRecall: boolean;
  status: string[];
}