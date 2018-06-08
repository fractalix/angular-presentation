import { Component, Input } from '@angular/core';

@Component({
  selector: '[slides-little-car]',
  templateUrl: './little-car.component.html',
  styleUrls: ['./little-car.component.css']
})
export class LittleCarComponent {
  @Input() position = {x: 0, y: 0, angle: 0};
  lightColor = '#ffbc05';
  darkColor = '#e38100';

  @Input()
  set color(color: string) {
    this.lightColor = color;
    this.darkColor = '#444';
  }
}