import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetServerAction, selectServerIp } from 'src/app/core/state/server';
import { AppState } from 'src/app/core/state/state';
import { environment } from 'src/env/enviroment';
import { IpService } from '../../core/services/ip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private store = inject(Store<AppState>);
  private _ipService = inject(IpService);

  public ip = this.store.select(selectServerIp);

  visible: boolean = false;

  setVisibility(): void {
    this.visible = !this.visible;
  }

  public async onSubmitSelectForm(values: any) {
    console.log(values);
    if (!values) return;

    const ip =
      values.server.code === 'market'
        ? environment.marketIP
        : environment.plosaIP;

    const isValidIp = await this._ipService.testIp(ip);

    if (!isValidIp) return alert('Invalid IP');

    this.store.dispatch(
      new SetServerAction({
        ip: ip,
      })
    );
  }
}
