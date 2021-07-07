import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersSpainComponent } from './players-spain/players-spain.component';
import { PlayersSwitzerlandComponent } from './players-switzerland/players-switzerland.component';
const routes: Routes = [
  { path: 'players/switzerland', component: PlayersSwitzerlandComponent },
  { path: 'players/spain', component: PlayersSpainComponent },
  { path: '**', component: PlayersSwitzerlandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
