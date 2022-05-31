import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [`./home.component.scss`],
})
export class HomeComponent implements OnInit {
  menuOptions:HTMLElement;
  constructor() {}
  ngOnInit() {
    this.menuOptions = document.getElementById("menu-options");
  }

  toggleMenu(){
    console.log("toggle",this.menuOptions.classList)
    if(this.menuOptions.classList.contains("hidden")){
      this.menuOptions.classList.remove("hidden")
    }
    else{
      this.menuOptions.classList.add("hidden")
    }
  }
}
