import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  @Input()
  title = '';

  submitButton = 'login';

  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  onSubmit(value: any) {
     this.submitted.emit(value);
  }

}
