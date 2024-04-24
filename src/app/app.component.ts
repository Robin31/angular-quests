import { Component } from '@angular/core';
import { BlockComponent } from './block/block.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  blockArray = [
    { position: 'top-left' },
    { position: 'top-right' },
    { position: 'bottom-left' },
    { position: 'bottom-right' },
  ];
}