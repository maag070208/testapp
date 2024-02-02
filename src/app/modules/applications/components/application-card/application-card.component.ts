import { Component, Input, inject } from '@angular/core';
import { IApplicationCard } from '../../core/model/application';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss'],
})
export class ApplicationCardComponent {
  @Input() application!: IApplicationCard;
  private router = inject(Router);

  public onSelectApp(app: IApplicationCard) {
    this.router.navigate(['/applications/iframe'], {
      queryParams: { application: app.route },
    });
  }
}
