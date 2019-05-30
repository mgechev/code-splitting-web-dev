import { NgModule } from '@angular/core';
import { NyanComponent } from './nyan.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NyanComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: NyanComponent
    }])
  ]
})
export class NyanModule {}
