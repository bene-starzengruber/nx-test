import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPaPipe } from './my-pa-pipe';

@NgModule({
            imports: [CommonModule],
            declarations: [MyPaPipe],
            exports: [MyPaPipe]
          })
export class MyPaPipeModule {

}
