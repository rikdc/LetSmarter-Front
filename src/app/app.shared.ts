import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { PaginatePipe, PaginationControlsCmp, PaginationService } from 'ng2-paginate';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ PaginatePipe, PaginationControlsCmp ],
  exports:      [ PaginatePipe, PaginationControlsCmp ]
})
export class SharedModule { }
