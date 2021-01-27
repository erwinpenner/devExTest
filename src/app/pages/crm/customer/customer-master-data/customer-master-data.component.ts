import { Component, ViewChild} from '@angular/core';
import 'devextreme/data/odata/store';
import {dummyData} from './customer-masterdata-fakedata';
import {DxTreeListComponent} from 'devextreme-angular';

@Component({
  selector: 'app-customer-master-data',
  templateUrl: './customer-master-data.component.html',
  styleUrls: ['./customer-master-data.component.scss']
})
export class CustomerMasterDataComponent {
  @ViewChild('treeListId', {static: false}) treeList: DxTreeListComponent;

  dataSourceTree: any;
  statusMap: any[];

  constructor() {
    this.dataSourceTree = dummyData;
    this.statusMap = [
      { name: 'Aktiv', value: 'active' },
      { name: 'Inaktiv', value: 'inactive' }
    ];
  }

  clearFilterRow = () => {
    this.treeList.instance.clearFilter('row');
  }

  refreshTreeList = () => {
    this.treeList.instance.refresh();
  }
}

