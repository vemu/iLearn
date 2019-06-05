import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentTheme: string;

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
    this.currentTheme = 'student';
    this.document.getElementById('theme').href = '../assets/student-theme.css';
  }

  toggleTheme(theme) {
    if (theme === 'student') {
      this.document.getElementById('theme').href = '../assets/student-theme.css';
      this.currentTheme = 'student';  
      console.log('student');
    } else {
      this.document.getElementById('theme').href = '../assets/pro-theme.css';
      this.currentTheme = 'pro';
      console.log('pro');
    }
  }
}


