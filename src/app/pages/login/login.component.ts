import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  user: any;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

    this.user = afAuth.authState;
    console.log(this.user)

    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/admin/dashboard');
      }
    });

  }

  public onSubmit(values: any): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      console.log(values);
      // your code goes here
      this.afAuth.auth.signInWithEmailAndPassword(values.email, values.password).then((x) => {
        this.router.navigate(['/admin/dashboard']);
      }).catch(
        (err) => {
          console.log(err);
        });
    }
  }

  login_facebook() {
    console.log("FACEBOOK")
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      (success) => {
        console.log(success);
        this.router.navigate(['/admin/dashboard']);
      }).catch(
      (err) => {
        console.log(err);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }


}
