import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectServerIp } from 'src/app/core/state/server';
import { AppState } from 'src/app/core/state/state';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {
  
  private store = inject(Store<AppState>);

  public ip = this.store.select(selectServerIp);


  
}
