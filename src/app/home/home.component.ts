import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  clicks = "login";

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    

    if (this.loginForm.invalid) {
      return;
    } else {
      localStorage.setItem('clickCounter', this.clicks);
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 1));
    this.router.navigate([`/dashboard/users`]);
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset;
  }

}
