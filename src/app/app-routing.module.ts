import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KundenstammComponent } from './kundenstamm/kundenstamm.component';
import { LieferantenstammComponent} from './lieferantenstamm/lieferantenstamm.component';

const routes: Routes = [
  { path: 'kundenstamm', component: KundenstammComponent },
  { path: 'lieferantenstamm', component: LieferantenstammComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    KundenstammComponent,
    LieferantenstammComponent
  ]
})
export class AppRoutingModule { }
