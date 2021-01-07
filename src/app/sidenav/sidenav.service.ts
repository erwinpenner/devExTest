import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  constructor() {
  }
  getNavigationList(): List[] {
    return navigation;
  }
  getContent(): string {
    return text;
  }
}

export class List {
  id: number | undefined;
  text: string | undefined;
  icon: string | undefined;
}


// bsm demo data
const navigation: any[] = [
  { id: 1, text: 'Kunden', icon: 'user', path: 'kundenstamm'},
  { id: 3, text: 'Lieferanten', icon: 'car', path: 'lieferantenstamm' },
  { id: 4, text: 'Kontakte', icon: 'card', path: 'kontakte' },
];

// bsm demo content
const text = 'Demo Content';
