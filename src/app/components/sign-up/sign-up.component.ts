import { Component, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent {
  @Input()
  title = '';
  @Input()
  submitButton = 'submit';

  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  onSubmit(value: any) {
    this.submitted.emit(value);
  }
}
