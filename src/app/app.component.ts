import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logoUrl: string;
  halfWidthLogo: boolean;

  // pristine -> untouched
  // dirty -> dirty state

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl();

  constructor() {
    this.halfWidthLogo = false;
    this.logoUrl = 'assets/images/logo/meta_logo.svg';
  }

  signIn() {
    console.log(this.email.value)
  }

}
