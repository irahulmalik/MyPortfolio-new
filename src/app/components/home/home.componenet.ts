import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [`./home.component.scss`],
})
export class HomeComponent implements OnInit {
  menuOptions: HTMLElement;
  hamburgerOption: HTMLElement;
  closeOption: HTMLElement;
  name: String = 'hello world';
  constructor() {}
  ngOnInit() {
    this.menuOptions = document.getElementById('menu-options');
    this.hamburgerOption = document.getElementById('menu-options-hamburger');
    this.closeOption = document.getElementById('menu-options-close');
  }

  toggleMenu() {
    console.log('toggle', this.menuOptions.classList);
    if (this.menuOptions.classList.contains('hidden')) {
      this.menuOptions.classList.remove('hidden');
      this.closeOption.classList.remove('hidden');
      this.hamburgerOption.classList.add('hidden');
    } else {
      this.menuOptions.classList.add('hidden');
      this.closeOption.classList.add('hidden');
      this.hamburgerOption.classList.remove('hidden');
    }
  }
}
