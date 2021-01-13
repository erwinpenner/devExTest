import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'BSM GmbH';
  }

  public get companyName() {
    return 'BSM GmbH';
  }

  public get subAppTitle() {
    return 'CRM';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
