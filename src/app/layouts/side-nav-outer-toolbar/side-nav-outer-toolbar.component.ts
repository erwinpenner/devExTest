import { Component, OnInit, NgModule, Input, ViewChild } from '@angular/core';
import { SideNavigationMenuModule, HeaderModule, FooterModule } from '../../shared/components';
import { ScreenService, AppInfoService } from '../../shared/services';
import { DxDrawerModule } from 'devextreme-angular/ui/drawer';
import { DxScrollViewModule, DxScrollViewComponent } from 'devextreme-angular/ui/scroll-view';
import { CommonModule } from '@angular/common';
import { appNavigation } from '../../app-navigation';

import {Router, NavigationEnd, RouterModule} from '@angular/router';
import { SideNavGeneralModule } from '../side-nav-general/side-nav-general.component';
import {DxToolbarModule} from 'devextreme-angular';

@Component({
  selector: 'app-side-nav-outer-toolbar',
  templateUrl: './side-nav-outer-toolbar.component.html',
  styleUrls: ['./side-nav-outer-toolbar.component.scss']
})
export class SideNavOuterToolbarComponent implements OnInit {
  @ViewChild(DxScrollViewComponent, { static: true }) scrollView: DxScrollViewComponent;
  selectedRoute = '';

  menuOpened: boolean;
  temporaryMenuOpened = false;

  @Input()
  title: string;

  menuMode = 'shrink';
  menuRevealMode = 'expand';
  minMenuSize = 0;
  shaderEnabled = false;
  appNav;

  constructor(private screen: ScreenService, private router: Router, public appInfo: AppInfoService) {
    this.appNav = appNavigation;
  }

  ngOnInit() {
    // this.menuOpened = this.screen.sizes['screen-large'];
    this.menuOpened = false;

    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.selectedRoute = val.urlAfterRedirects.split('?')[0];
      }
    });

    this.screen.changed.subscribe(() => this.updateDrawer());

    this.updateDrawer();
  }

  updateDrawer() {
    const isXSmall = this.screen.sizes['screen-x-small'];
    const isLarge = this.screen.sizes['screen-large'];

    // this.menuMode = isLarge ? 'shrink' : 'overlap';
    this.menuMode = 'overlap';
    // this.menuRevealMode = isXSmall ? 'slide' : 'expand';
    this.menuRevealMode = 'slide';
    // this.minMenuSize = isXSmall ? 0 : 60;
    this.minMenuSize = 0;
    // this.shaderEnabled = !isLarge;
    this.shaderEnabled = true;
  }

  toggleMenu = (e) => {
    this.menuOpened = !this.menuOpened;
    e.event.stopPropagation();
  }

  get hideMenuAfterNavigation() {
    return this.menuMode === 'overlap' || this.temporaryMenuOpened;
  }

  get showMenuAfterClick() {
    return !this.menuOpened;
  }

  navigationChanged(event) {
    const path = event.itemData.path;
    const pointerEvent = event.event;

    if (path && this.menuOpened) {
      if (event.node.selected) {
        pointerEvent.preventDefault();
      } else {
        this.router.navigate([path]);
        this.scrollView.instance.scrollTo(0);
      }

      if (this.hideMenuAfterNavigation) {
        this.temporaryMenuOpened = false;
        this.menuOpened = false;
        pointerEvent.stopPropagation();
      }
    } else {
      pointerEvent.preventDefault();
    }
  }

  navigationClick() {
    if (this.showMenuAfterClick) {
      this.temporaryMenuOpened = true;
      this.menuOpened = true;
    }
  }
}

@NgModule({
  imports: [SideNavigationMenuModule, DxDrawerModule, HeaderModule, DxScrollViewModule, CommonModule,
    SideNavGeneralModule, RouterModule, FooterModule, DxToolbarModule],
  exports: [ SideNavOuterToolbarComponent ],
  declarations: [ SideNavOuterToolbarComponent ]
})
export class SideNavOuterToolbarModule { }
