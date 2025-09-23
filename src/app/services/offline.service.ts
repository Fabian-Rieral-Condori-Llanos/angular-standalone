import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {
  private onlineStatus = new BehaviorSubject<boolean>(navigator.onLine);
  public isOnline$ = this.onlineStatus.asObservable();

  constructor() {
    merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false))
    ).subscribe(status => {
      this.onlineStatus.next(status);
      console.log('Estado de conexión:', status ? 'Online' : 'Offline');
    });
  }

  get isOnline(): boolean {
    return this.onlineStatus.value;
  }

  get isOffline(): boolean {
    return !this.onlineStatus.value;
  }
}
