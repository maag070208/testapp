import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsRoutingModule } from './applications-routing.module';
//
import { HomeComponent } from './pages/home/home.component';
import { SelectServerFormComponent } from './components/select-server-form/select-server-form.component';
import { ApplicationsComponent } from './components/applications/applications.component';
//
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IpService } from './core/services/ip.service';
import { HttpClientModule } from '@angular/common/http';
import { IframeComponent } from './components/iframe/iframe.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ApplicationCardComponent } from './components/application-card/application-card.component'; 
@NgModule({
  declarations: [
    HomeComponent,
    SelectServerFormComponent,
    ApplicationsComponent,
    IframeComponent,
    ApplicationCardComponent,
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [IpService],
})
export class ApplicationsModule {}
