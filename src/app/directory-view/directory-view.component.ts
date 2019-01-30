import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Renderer } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-directory-view',
  templateUrl: './directory-view.component.html',
  styleUrls: ['./directory-view.component.scss'],
})
export class DirectoryViewComponent implements OnInit {
  queueList: QueueCall[] = [];
  status_pair: any[] = [{ id: 1, val: 'Available' }, { id: 2, val: 'Busy' }, { id: 3, val: 'Meeting' }, { id: 4, val: 'Vacation' }];
  strArry: string[] = ["Available", "Busy", "Meeting", "Vacation"];
  @ViewChild('#popupInput') popupInput: ElementRef;
  constructor() { }

  ngOnInit() {
    this.queueList.push({ remoteCallId: '1', calledName: 'Call1', waitTime: 0, stateName: 'Queued', timestamp: 10, isRecall: false, status: this.strArry });
    this.queueList.push({ remoteCallId: '2', calledName: 'Call2', waitTime: 0, stateName: 'Queued', timestamp: 20, isRecall: false, status: this.strArry });
    this.queueList.push({ remoteCallId: '3', calledName: 'Call3', waitTime: 0, stateName: 'Parked', timestamp: 10, isRecall: false, status: this.strArry });
    this.queueList.push({ remoteCallId: '4', calledName: 'Call4', waitTime: 0, stateName: 'Parked', timestamp: 20, isRecall: false, status: this.strArry });
    this.queueList.push({ remoteCallId: '5', calledName: 'Call5', waitTime: 0, stateName: 'Recall', timestamp: 10, isRecall: true, status: this.strArry });
    this.queueList.push({ remoteCallId: '6', calledName: 'Call6', waitTime: 0, stateName: 'Recall', timestamp: 20, isRecall: true, status: this.strArry });
    this.queueList.push({ remoteCallId: '7', calledName: 'Call7', waitTime: 0, stateName: 'Queued', timestamp: 10, isRecall: false, status: this.strArry });
    this.queueList.push({ remoteCallId: '8', calledName: 'Call8', waitTime: 0, stateName: 'Parked', timestamp: 10, isRecall: false, status: this.strArry });
    this.queueList.push({ remoteCallId: '9', calledName: 'Call9', waitTime: 0, stateName: 'Recall', timestamp: 10, isRecall: true, status: this.strArry });
    this.queueList.push({ remoteCallId: '10', calledName: 'Call10', waitTime: 0, stateName: 'Parked', timestamp: 30, isRecall: false, status: this.strArry });
    this.queueList.push({ remoteCallId: '11', calledName: 'Call11', waitTime: 0, stateName: 'Queued', timestamp: 50, isRecall: false, status: this.strArry });
    this.queueList.push({ remoteCallId: '12', calledName: 'Call12', waitTime: 0, stateName: 'Recall', timestamp: 50, isRecall: true, status: this.strArry });
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
