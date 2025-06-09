import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutUsComponent } from './components/about-us/about-us';
import { ContactUsComponent } from './components/contact-us/contact-us';
import { GetQuoteComponent } from './components/get-quote/get-quote';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'quote', component: GetQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}