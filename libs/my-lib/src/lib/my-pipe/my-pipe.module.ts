import { NgModule } from '@angular/core';

import { MyPipe } from './my-pipe';
import { CommonModule } from '@angular/common';

@NgModule({
            imports: [CommonModule],
            declarations: [MyPipe],
            exports: [MyPipe]
          })
export class MyPipeModule {

}
