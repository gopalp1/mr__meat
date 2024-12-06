import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { urlConstants } from 'src/app/core/constants.ts/url';
import { HttpService } from 'src/app/core/services/http.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  mobileNumber: string = '';
  isOtpSent: boolean = false;
  showOtpInput: boolean = false;
  otpValue: string = '';
  configuration = {
    length: 5,
    allowNumbersOnly: true,
  };
  constructor(
    private apiService: HttpService,
    private userService: UserService,
    private router: Router,
    private toast: MatSnackBar
  ) {
    userService.getUserValue().then((resp) => {
      if (resp) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
  goBack() {
    this.isOtpSent = false;
  }
  sendOtp() {
    if (this.mobileNumber.length === 10) {
      const payload = {
        url: urlConstants.GET_OTP,
        payload: {
          mobile: this.mobileNumber,
          userType: 'Admin',
        },
      };
      this.apiService.post(payload).then(
        (resp: any) => {
          console.log(resp, 'resp');
          this.isOtpSent = true;
          this.showOtpInput = true;
        },
        (error) => {
          console.log(error, 'erroe');
        }
      );
    } else {
      this.toast.open('Please enter valid mobile number', 'Close', {
        duration: 3000,
        panelClass: 'error-toast',
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }

  onOtpChange(value: string) {
    this.otpValue = value;
    console.log('Current OTP:', this.otpValue);
  }

  verifyOtp() {
    if (this.otpValue.length === 5) {
      const payload = {
        url: urlConstants.VERIFY_OTP,
        payload: {
          otp: this.otpValue,
          mobile: this.mobileNumber,
          name: 'Your name',
          userType: 'Admin',
        },
      };

      this.apiService.post(payload).then((resp: any) => {
        this.userService.setUserValue(resp.token);
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.toast.open('Invalid OTP. Please try again.', 'Close', {
        duration: 3000,
        panelClass: 'error-toast',
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }

  // Resend OTP Handler
  resendOtp() {
    this.toast.open('OTP has been resent!.', 'Close', {
      duration: 3000,
      panelClass: 'success-toast',
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
