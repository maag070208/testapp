import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent {
  private router = inject(Router);


  public applications = ['Notas', 'Pedidos', 'Reportes', 'Cobros'];

  onSelectAction(action: string) {
    switch (action) {
      case 'Notas':
        this.router.navigate(['/applications/iframe'], {
          queryParams: { application: 'NotasComer' },
        });
        break;
      case 'Pedidos':
        this.router.navigate(['/applications/iframe'], {
          queryParams: { application: 'PedidosComer' },
        });
        break;
      case 'Reportes':
        this.router.navigate(['/applications/iframe'], {
          queryParams: { application: 'ReporteCobros' },
        });
        break;
      case 'Cobros':
        this.router.navigate(['/applications/iframe'], {
          queryParams: { application: 'Cobros' },
        });
        break;
      default:
        alert('No se ha implementado la acción');
        break;
    }
  }
}
