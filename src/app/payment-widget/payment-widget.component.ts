import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import AdyenCheckout from '@adyen/adyen-web';


@Component({
  selector: 'app-payment-widget',
  templateUrl: './payment-widget.component.html',
  styleUrls: ['./payment-widget.component.css']
})
export class PaymentWidgetComponent implements OnInit {

  @ViewChild('hook', { static: true }) hook: ElementRef;


  constructor() {
    this.hook = new ElementRef('');
  }

  ngOnInit(): void {

    const showCheckout = async () =>{
      const checkout = await createAdyenCheckout();
      await checkout.create('card').mount(this.hook.nativeElement);

    }

    showCheckout();

    async function createAdyenCheckout() {

      const configuration = {
        environment: 'test', // Change to 'live' for the live environment.
        clientKey: 'test_CHSGAF73YRAN3I6TDVGQSQVO4ETBP75D', // Public key used for client-side authentication: https://docs.adyen.com/development-resources/client-side-authentication
        analytics: {
          enabled: true // Set to false to not send analytics data to Adyen.
        },
        locale: 'de-DE',
        // session: {
        //   id: 'CS49711FF4B0B60890', // Unique identifier for the payment session.
        //   sessionData: 'Ab02b4c0!BQABAgBQF3+iAPNiPH0keZu/Cq1w1XJcBfI8bvB7i/6GwPU87JghaHhmSPAZlG4DgVJAKkGsHxnFFn1wlsGcJMfXXP9Gtktaf+JF6YIK2d3dZsBp4G+kh7sNiKuRiZaUys/n+VSNYk1HtUODs73QiqqHJISdbTZuIh1f9C1RG7R6Fx2GT4ko1mxqfWke0/RFAF6pXlHLKnSiuwGqugEMNDKgAUxgCGG7V2vVR0xUW+gV01JBr2/sEZTQik6GUKRZ3DK1KFa6DDK48SzytDRdgczM6PhQ/W8F0OB8hASZ+9utn3wibkVF9trxfMGS+HvbNTJg00xhIMsnFB0h3W/GpPKQqAIGrcejiwePlmpC8xIQwDMe70GMh90lqu1PswecDITapC0yyUPORtauzIP34Ge/p5cePT8VKetOCdnZvq2CMHZdA+6c/pULoET8eRgHuGFxnHo5/zn2OOfp3/o5/+eoWEsPiLJy5iDvjwb109wguCay3c/Ur6xXtL3j3KOSsoX97tJ/4leoTCdw9YvZhOgFmBdqgMxWuJ12k6R5ENFCVZube+ccutFx8iC0bhzd0mBNPeSZB0zHR6Rpk32VKfwbULh7No1Eevyi8FxnjdWlFq2FMO6CrjIHenfm4NPKV9I8LzCfrKD9jxUN6nAz1hI6j+UJCzBzGEpYRxFF3sP7iYvm8gxvaBJTLNt7pWkjQ0sASnsia2V5IjoiQUYwQUFBMTAzQ0E1MzdFQUVEODdDMjRERDUzOTA5QjgwQTc4QTkyM0UzODIzRDY4REFDQzk0QjlGRjgzMDVEQyJ9TjAU4glMpY8/SHIeq2trTqc8Qt8koZszZvWMGrfxj298kfINoCKtJhbkZVYdS5vLQ/bIzIn9TDJhKxqBV3cX0FfVdGRFiwN+ki2tLQOS9/WJ+3KBHv3MvMFyp6yz9Mzod1ZOdCbDPrgjpCb7+g5CEm5Qa8X52nGHZZO0cukIB9eVHqpLCI3diVzO7mrIS2MDVFC9O36Ki+CChdDvM6uw7zaFyUx34RvRg/8OsMMZUqQk4J01uN7MsnffkpdhcbvSgMcCMqQkdbTnyWgr1cGpQGs+r7ZyXS0xPoJGXjo8N/IOS2BaZk0ByaUWsFyHFvRBeFwbBz++IpSyL6YKmI/lJ/6U8rdfuSt7fESrny4t+/Sd5fvvAKAV47kL1zcTV14oD2EOgGKerDltEZ3WF0XmEi6L8dJcBtUxSpwfczCwKWXf2radP/LAZg+FpMKkvC80ap8a73+yVC38IekiZRgdKfA/nvgvd6jVrlnu9ZjKk8E20WJ3EA0NLr3ZqrnXyE6m1UCaBUHmALmDCHhRpPepTa7HC14j1NhXpxFv4nvbSKUobr2M/vduL+QBFrAgPYP7vhK0lHOwAvURTrmzWPtQWgXR' // The payment session data.
        // },
        onPaymentCompleted: (result: any, component: any) => {
          console.info(result, component);
        },
        onError: (error: any, component: any) => {
          console.error(error.name, error.message, error.stack, component);
        },
        // Any payment method specific configuration. Find the configuration specific to each payment method:  https://docs.adyen.com/payment-methods
        // For example, this is 3D Secure configuration for cards:
        paymentMethodsConfiguration: {
          card: {
            hasHolderName: true,
            holderNameRequired: true,
            billingAddressRequired: true
          }
        }
      };

      // Create an instance of AdyenCheckout using the configuration object.
      return await AdyenCheckout(configuration);

      // Create an instance of the Component and mount it to the container you created.
      

    };
  }

}
