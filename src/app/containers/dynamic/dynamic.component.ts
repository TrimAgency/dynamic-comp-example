import { Component,
         ViewEncapsulation,
         ViewChild,
         ElementRef,
         ComponentRef,
         ComponentFactoryResolver,
         ViewContainerRef,
         OnDestroy } from '@angular/core';

// entry components
import { LoginComponent } from '../../components/login/login.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';

const components = {
  user: { comp: LoginComponent, title: 'User Login' },
  admin: { comp: LoginComponent, title: 'Admin Login' },
  signUp: { comp: SignUpComponent, title: 'User Sign Up' }
};

type Forms = LoginComponent | SignUpComponent;

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicComponent implements OnDestroy {
  logo = true;
  buttons = [
    { arg: 'user', text: 'Login'},
    { arg: 'admin', text: 'Admin Login'},
    { arg: 'signUp', text: 'Sign Up'}
  ];

  component: ComponentRef<Forms>;

  @ViewChild('form', { read: ViewContainerRef})
  form: ViewContainerRef;

  constructor( private resolver: ComponentFactoryResolver ) { }

  showForm(name) {
    this.logo = false;
    this.form.clear();

    const compFactory = this.resolver.resolveComponentFactory<Forms>(components[name].comp);
    this.component = this.form.createComponent(compFactory);

    this.component.instance.title = components[name].title;
    this.component.instance.submitted.subscribe( data => this.submitFormData(data, name) );
  }

  private submitFormData(data, name) {
    console.log(data, name);
  }

  ngOnDestroy() {
   this.component.destroy();
  }

}
