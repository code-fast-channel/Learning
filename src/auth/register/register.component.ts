import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from '../../shared/components/toaster/toaster.service';
import { ToastrType } from '../../shared/components/toaster/toaster/toaster.constant';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [AuthService],
})
export class RegisterComponent {
loginForm: any;

  constructor(private fb: FormBuilder, private authService: AuthService,private toast: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.authService.register(this.loginForm.value).subscribe(val => {
        console.log('val', val);
        if(!val.success) {
          this.toast.showToast(val.message,ToastrType.Error);
          return;
        }
        this.toast.showToast(val.message,ToastrType.Success);
      })
    }
  }
}