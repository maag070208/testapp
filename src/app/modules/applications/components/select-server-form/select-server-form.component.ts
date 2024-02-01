import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdown } from 'src/app/core/models/dropdown';

@Component({
  selector: 'app-select-server-form',
  templateUrl: './select-server-form.component.html',
  styleUrls: ['./select-server-form.component.scss']
})
export class SelectServerFormComponent {

  @Output() onSubmit: EventEmitter<IDropdown> = new EventEmitter();

  public servers: IDropdown[] = [
    { name: 'Market', code: 'market' },
    { name: 'Plosa', code: 'plosa' },
  ];

  public selectServerForm: FormGroup = new FormGroup({
    server: new FormControl('', Validators.required),
  });
}
