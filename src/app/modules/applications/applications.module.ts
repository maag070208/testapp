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
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [HomeComponent, SelectServerFormComponent, ApplicationsComponent],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    DialogModule,    
  ],
})
export class ApplicationsModule {}
