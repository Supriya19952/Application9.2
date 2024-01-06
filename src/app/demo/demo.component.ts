import { Component } from '@angular/core';
import { MyAddPipe } from '../my-add.pipe';
import { MuMultPipe } from '../mu-mult.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MyAddPipe, MuMultPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
