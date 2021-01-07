import {Component, OnInit, ViewChild, enableProdMode} from '@angular/core';
import {DxDrawerComponent} from 'devextreme-angular';
import {List, SidenavService} from './sidenav.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  preserveWhitespaces: true
})
export class SidenavComponent implements OnInit {

  @ViewChild(DxDrawerComponent, {static: false}) drawer: DxDrawerComponent | undefined;
  navigation: List[];
  text: string;
  isDrawerOpen = true;
  elementAttr: any;

  constructor(service: SidenavService) {
    this.text = service.getContent();
    this.navigation = service.getNavigationList();
  }

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen
    }
  }];

  ngOnInit(): void {
  }
}
