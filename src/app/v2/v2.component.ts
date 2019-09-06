import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.css']
})
export class V2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAndHide() {
    let v2 = document.getElementById('v2-log')
    if (v2.classList.contains('hide')) {
      v2.classList.add('show')
      v2.classList.remove('hide')
    } else {
      v2.classList.add('hide')
      v2.classList.remove('show')
    }
  }

}
