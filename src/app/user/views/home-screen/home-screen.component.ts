import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less']
})
export class HomeScreenComponent implements OnInit {

  constructor(
    public router: Router
  ) { 

  }

  public searchText: string = '';
  onSearchTextEntered(event: string) {
    this.searchText = event;
    console.log(this.searchText)
    this.router.navigate(['/user/category/all/name/',this.searchText]);
  }
  
  public isTextActivated: boolean = true;
  onSearchActivated(event: boolean){
    this.isTextActivated = event
  }
  ngOnInit(): void {
  }

}
