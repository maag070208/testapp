import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetServerAction, selectServerIp } from 'src/app/core/state/server';
import { AppState } from 'src/app/core/state/state';
import { environment } from 'src/env/enviroment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private store = inject(Store<AppState>);

  public ip = this.store.select(selectServerIp);

  visible: boolean = false;

  setVisibility(): void {
    this.visible = !this.visible;
  }

  public onSubmitSelectForm(values: any): void {
    console.log(values);
    if (!values) return;
    this.store.dispatch(
      new SetServerAction({
        ip:
          values.ipName === 'market'
            ? environment.marketIP
            : environment.plosaIP,
      })
    );
  }
}
