import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterializeDirective } from "angular2-materialize";

import { PaginatePipe, PaginationControlsCmp, PaginationService } from 'ng2-paginate';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ PaginatePipe, PaginationControlsCmp, MaterializeDirective ],
  exports:      [ PaginatePipe, PaginationControlsCmp, MaterializeDirective ]
})
export class SharedModule { }
