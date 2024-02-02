import { Component } from '@angular/core';
import { IApplicationCard } from '../../core/model/application';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent {
  public applications: IApplicationCard[] = [
    {
      name: 'Notas',
      icon: 'notes',
      color: 'white',
      route: 'NotasComer',
    },
    {
      name: 'Pedidos',
      icon: 'fastfood',
      color: 'white',
      route: 'PedidosComer',
    },
    {
      name: 'Reportes',
      icon: 'assignment',
      color: 'white',
      route: 'ReporteCobros',
    },
    {
      name: 'Cobros',
      icon: 'attach_money',
      color: 'white',
      route: 'Cobros',
    },
  ];
}
