import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

import { MaintenanceService, Maintenance } from '../shared/'

@Component({
  selector: 'app-maintenance-list',
  templateUrl: 'maintenance-list.component.html',
  styleUrls: ['maintenance-list.component.css'],
  providers: [MaintenanceService]
})
export class MaintenanceListComponent implements OnInit {
  constructor(
    private router: Router,
    private dataService: MaintenanceService
  ) { }

  private maintenance: Maintenance[];
  private selectedMaintenance: Maintenance;

  ngOnInit() {
    this.dataService.getMaintenance().subscribe(maintenance => {
      this.maintenance = maintenance;
    });
  };

  onSelect(item: Maintenance) {
    this.router.navigate(['/maintenance', item.id]);
  }
}