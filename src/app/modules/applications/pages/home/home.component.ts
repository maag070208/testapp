import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetServerAction, selectServerIp } from 'src/app/core/state/server';
import { AppState } from 'src/app/core/state/state';
import { environment } from 'src/env/enviroment';
import { IpService } from '../../core/services/ip.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectServerFormComponent } from '../../components/select-server-form/select-server-form.component';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private store = inject(Store<AppState>);
  private _ipService = inject(IpService);
  private dialog = inject(MatDialog);
  public ip = this.store.select(selectServerIp);

  async ngOnInit() {
    const ip = await firstValueFrom(this.ip);
    if (ip === '') this.openDialog();
  }

  public openDialog(message?: string) {
    const dialogRef = this.dialog.open(SelectServerFormComponent, {
      data: { message },
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((res) => {
      console.log('The dialog was closed');
      console.log(res);
      this.onSubmitSelectForm(res);
    });

    dialogRef.backdropClick().subscribe(() => {
      this.dialog.closeAll();
      this.openDialog();
    });
  }

  public async onSubmitSelectForm(values: any) {
    console.log(values);
    if (!values) return;

    const ip =
      values.server.code === 'market'
        ? environment.marketIP
        : environment.plosaIP;

    const isValidIp = await this._ipService.testIp(ip);

    if (!isValidIp) return this.openDialog('Invalid IP');

    this.store.dispatch(
      new SetServerAction({
        ip: ip,
      })
    );
  }
}
