import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  constructor() {
  }
  getNavigationList(): object {
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
const navigation = [
  { text: 'Home', icon: 'home', path: '/home' },
  { text: 'Kunden', icon: 'user', items: [
      { text: 'Kundenstamm', path: '/kunden/kundenstamm' },
      { text: 'Neuer Kunde', path: '/kunden/neuer_kunde' },
      { text: 'Kontrakte', path: '/kunden/kontrakte' },
      { text: 'Kreditlimits', path: '/kunden/kreditlimits' },
      { text: 'Materialnummern', path: '/kunden/materialnummern' },
      { text: 'Sondermargen', path: '/kunden/sondermargen' }
    ] },
  { text: 'Lieferanten', icon: 'car', items: [
      { text: 'Lieferantenstamm', path: '/lieferanten/lieferantenstamm' },
      { text: 'Neuer Lieferant', path: '/lieferanten/neuer_lieferant' },
      { text: 'Auftragsbestätigungen', path: '/lieferanten/auftragsbestaetigungen' },
      { text: 'Lieferterminkontrolle', path: '/lieferanten/lieferterminkontrolle' },
      { text: 'Reklamationen', path: '/lieferanten/reklamationen' },
      { text: 'Service Center', path: '/lieferanten/service_center' }
    ] }
];

// bsm demo content
const text = 'Demo Content';
