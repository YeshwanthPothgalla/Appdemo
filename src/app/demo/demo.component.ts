import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  myVariable = 'Namaste';
  message2 = 'Na Angular Application ki Swagatham _/\_';
  message3 = 'Ika Selavu, Dhanyavaadamulu'

  changeValue(){
    this.myVariable = 'Meeru bagunnara'
    this.message2= 'Welcome to my Angular application'
    this.message3 = 'Thank you for Visiting'
  }

}
