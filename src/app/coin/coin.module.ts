import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinlistComponent } from './coinlist/coinlist.component';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [CoinlistComponent, FiltroPipe],
  imports: [CommonModule],
  exports: [CoinlistComponent],
})
export class CoinModule {}
