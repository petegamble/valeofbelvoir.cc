import { Component } from '@angular/core';

@Component({
  selector: 'vbcc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Vale of Belvoir Cycling Club';

  signIn(): void{
    console.log('clicky'); 
    window.location.href = 'https://valeofbelvoir.auth.eu-west-2.amazoncognito.com/login?response_type=code&client_id=4arssi7pu1ghutcqcu7qdsv5re&redirect_uri=https://www.valeofbelvoir.cc/user/auth';

  }
}
