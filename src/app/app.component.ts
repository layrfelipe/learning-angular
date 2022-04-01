import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aprendendo-angular';

  userName = "Vando Trem Bala";
  age = 22;
  userData = {
    email: "layrfpf@gmail.com",
    role: "front-end developer"
  }
}
