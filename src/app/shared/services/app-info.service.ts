import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Test';
  }

  public get companyName() {
    return 'CompanyName';
  }

  public get subAppTitle() {
    return 'CRM';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
