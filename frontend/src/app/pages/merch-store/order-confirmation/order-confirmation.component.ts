import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
  @Input() formData = {
    email: '',
    mailName: '',
    street1: '',
    street2: '',
    city: '',
    zip: '',
    state: '',
    country: '',
    otherRequests: '',
    termsCheck: false,
    privacyCheck: false,
    captcha: '',
  };

  @Output() backButtonClicked = new EventEmitter();
  @Output() orderSubmitted = new EventEmitter();

  recaptchaSiteKey = environment.recaptcha.sitekey;

  constructor(private readonly viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]);
  }

  goBack() {
    this.backButtonClicked.emit();
  }

  submitOrder() {
    this.orderSubmitted.emit();
  }
}
