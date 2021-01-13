export const appNavigation = [
  {
    text: 'CRM',
    path: '/crm',
    icon: 'group'
  },
  {
    text: 'ERP',
    path: '/erp',
    icon: 'preferences'
  }
];

export const crmNavigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Kunden',
    icon: 'user',
    items: [
      {
        text: 'Kundenstamm',
        path: '/kunden/kundenstamm'
      },
      {
        text: 'Neuer Kunde',
        path: '/kunden/neuer_kunde'
      },
      {
        text: 'Kontrakte',
        path: '/kunden/kontrakte'
      },
      {
        text: 'Kreditlimits',
        path: '/kunden/kreditlimits'
      },
      {
        text: 'Sondermargen',
        path: '/kunden/sondermargen'
      },
      {
        text: 'Materialnummern',
        path: '/kunden/materialnummern'
      },
    ]
  },
  {
    text: 'Lieferanten',
    icon: 'car',
    items: [
      {
        text: 'Lieferantenstamm',
        path: '/lieferanten/lieferantenstamm'
      },
      {
        text: 'Neuer Lieferant',
        path: '/lieferanten/neuer_lieferant'
      },
      {
        text: 'Auftragsbestätigungen',
        path: '/lieferanten/auftragsbestaetigungen'
      },
      {
        text: 'Lieferterminkontrolle',
        path: '/lieferanten/lieferterminkontrolle'
      },
      {
        text: 'Reklamationen',
        path: '/lieferanten/reklamationen'
      },
      {
        text: 'Service Center',
        path: '/service_center'
      }
    ]
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: '/profile'
      },
      {
        text: 'Tasks',
        path: '/tasks'
      }
    ]
  }
];
