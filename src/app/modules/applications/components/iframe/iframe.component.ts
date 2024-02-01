import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { selectServerIp } from 'src/app/core/state/server';
import { AppState } from 'src/app/core/state/state';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  private router = inject(Router);
  private store = inject(Store<AppState>);
  private sanitizer = inject(DomSanitizer);
  public application: string = '';
  public url: any = '';

  public screenWidth: number = window.innerWidth;
  public screenHeight: number = window.innerHeight;

  async ngOnInit() {
    const router = await firstValueFrom(
      this.router.routerState.root.queryParams
    );
    console.log(router);
    this.application = router['application'];

    const ip = await firstValueFrom(this.store.select(selectServerIp));
    
    if (!ip) {
      this.router.navigate(['/']);
      return;
    }

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      `http://${ip}/Plosa/${this.application}`
    );
  }
}
