import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

class Throttle {
  resolve() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'nyan',
        loadChildren: () => import('./nyan/nyan.module').then(m => m.NyanModule),
        // Introduced for an artificial delay
        resolve: {
          Throttle
        }
      }
    ])
  ],
  providers: [Throttle],
  bootstrap: [AppComponent]
})
export class AppModule {}
