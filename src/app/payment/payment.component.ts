import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() {
    render(
      {
        id: "#myPaypalButtons",
        currency: "USD",
        value: "100.00",
        onApprove: (details) => {
          alert("Transaction Successful");
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
