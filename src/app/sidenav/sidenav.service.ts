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
const navigation: List[] = [
  { id: 1, text: 'Kunden', icon: 'user' },
  { id: 2, text: 'Kundenstamm', icon: undefined},
  { id: 3, text: 'Lieferanten', icon: 'car' },
  { id: 4, text: 'Kontakte', icon: 'card' },
];

// bsm demo content
const text = 'Demo Content';
