import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  ShowSecret = false;
  Numbers = [];
  toggleDetails(){
    this.ShowSecret = !this.ShowSecret;
    this.Numbers.push(this.Numbers.length + 1);
  }
}
