import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcome = 'Welcome to our Club'

  verifyWelcomeLength = (welcomeText:  String):boolean => {
    if(welcomeText.length<50)
      return true
    return false
  }
}
