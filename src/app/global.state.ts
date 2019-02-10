import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalState {

  private _data = new Subject<any>();
  private _dataStream$ = this._data.asObservable();

  private _subscriptions: Map<string, Array<Function>> = new Map<string, Array<Function>>();

  constructor() {
    this._dataStream$.subscribe((data) => this._onEvent(data));
  }

  notifyDataChanged(key: string, value: any) {
      this._data.next({
        Key: key,
        Value: value
      });
  }

  subscribe(key: string, callback: Function) {
    const subscribers = this._subscriptions.get(key) || [];
    subscribers.push(callback);

    this._subscriptions.set(key, subscribers);
  }

  unsubscribe(key) {
    this._subscriptions.delete(key);
  }

  private _onEvent(data: any) {
    const subscribers = this._subscriptions.get(data['Key']) || [];

    subscribers.forEach((callback) => {
      callback.call(null, data['Value']);
    });
  }
}
