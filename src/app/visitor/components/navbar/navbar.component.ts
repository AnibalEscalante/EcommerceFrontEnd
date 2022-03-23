import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  
  public categoryList: FormControl;
  public options: string[];
  public filteredOptions: Observable<string[]> | null;

  constructor() {
    this.categoryList = new FormControl();
    this.options = ['celulares', 'audifonos', 'monitores'];
    this.filteredOptions = null;
  }

  ngOnInit(): void {
    this.filteredOptions = this.categoryList.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLocaleLowerCase().includes(filterValue));
  }

}
