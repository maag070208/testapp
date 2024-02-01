import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ServerReducer } from './server.reducers';

@NgModule({
  imports: [StoreModule.forFeature('server', ServerReducer)],
})
export class ServerStoreModule {}
