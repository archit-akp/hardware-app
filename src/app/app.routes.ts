import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutUsComponent } from './components/about-us/about-us';
import { GetQuoteComponent } from './components/get-quote/get-quote';
import { BoltsComponent } from './components/bolts/bolts';
import { NutsComponent } from './components/nuts/nuts';
import { WashersComponent } from './components/washers/washers';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    { path: 'about', component: AboutUsComponent },
    { path: 'quote', component: GetQuoteComponent },
    { path: 'bolts', component: BoltsComponent },
    { path: 'nuts', component: NutsComponent },
    { path: 'washers', component: WashersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}