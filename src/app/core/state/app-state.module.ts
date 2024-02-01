import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ServerStoreModule } from './server';

@NgModule({
  imports: [
    ServerStoreModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
})
export class AppStateModule {}
