import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <svg>
    </svg>
  `
})
export class AppComponent {
  y = 200;

  constructor() {
    window.setInterval(() => {
      this.y = Math.random() * 300
    }, 200);
  }
}
