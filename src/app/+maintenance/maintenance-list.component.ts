import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

import { PaginationService } from 'ng2-paginate';

import { MaintenanceForm } from './maintenance-form';
import { Maintenance } from '../app.models';
import { AppData } from '../app.data';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: 'maintenance-list.component.html',
  providers: [AppData, MaintenanceForm, PaginationService]
})
export class MaintenanceList implements OnInit {
  constructor(
    private router: Router,
    private dataService: AppData
  ) { }

  private maintenance: Maintenance[];
  private selectedMaintenance: Maintenance;

  ngOnInit() {
    this.dataService.getMaintenance().subscribe(maintenance => {
      console.log(maintenance);
      this.maintenance = maintenance;
    });
  };

  onSelect(item: Maintenance) {
    this.router.navigate(['/maintenance', item.id]);
  }

  onCancel() {
    this.selectedMaintenance = null;
  }

  addNew() {
    this.selectedMaintenance = new Maintenance();
  }
}