import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  what(){
    let what = document.getElementById('what')
    if (what.classList.contains('hide'))
    {
      what.classList.add('show')
      what.classList.remove('hide')
    }
    else{
      what.classList.add('hide')
      what.classList.remove('show')
    }
  }

  stats(){
    let what = document.getElementById('stats')
    if (what.classList.contains('hide'))
    {
      what.classList.add('show')
      what.classList.remove('hide')
    }
    else{
      what.classList.add('hide')
      what.classList.remove('show')
    }
  }

  combat(){
    let what = document.getElementById('combat')
    if (what.classList.contains('hide'))
    {
      what.classList.add('show')
      what.classList.remove('hide')
    }
    else{
      what.classList.add('hide')
      what.classList.remove('show')
    }
  }

}
