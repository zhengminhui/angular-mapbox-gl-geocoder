import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapboxComponent } from './mapbox.component';
import { MapboxService } from './mapbox.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MapboxComponent],
  exports: [MapboxComponent],
  providers: [MapboxService],
})
export class MapboxModule {}
