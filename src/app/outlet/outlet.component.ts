import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../core/services/http.service';
import { OutletAddComponent } from './outlet-add/outlet-add.component';
import { urlConstants } from '../core/constants.ts/url';
import { Location } from '@angular/common';
@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss'],
})
export class OutletComponent implements OnInit {
  searchQuery: string = '';
  isLoading = true;
  skeletonArray = Array(5);
  totalCount = 0;
  branches: any = [];

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private apiService: HttpService,
    private location: Location
  ) {}

  ngOnInit() {
    this.fetchOutlets();
  }

  fetchOutlets() {
    this.isLoading = true;
    const payload = {
      url: urlConstants.GET_OUTLETS,
    };

    console.log('payload payload payload', payload);
    this.apiService.get(payload).then(
      (resp: any) => {
        this.branches = resp?.rows;
        this.totalCount = resp?.count;
        this.isLoading = false;
      },
      (error) => {}
    );
  }
  goBack() {
    this.location.back();
  }

  onSearchInput(event: any) {}

  add(branch?: any) {
    const dialogRef = this.dialog.open(OutletAddComponent, {
      width: '500px',
      data: { branch },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchOutlets();
      }
    });
  }

  confirmDelete(branch: any) {
    if (confirm(`Are you sure you want to delete ${branch?.name}?`)) {
      this.deleteItem(branch);
    }
  }

  deleteItem(branch: any) {
    const payload = {
      url: `api/outlets/${branch?.id}`,
    };
    this.apiService.delete(payload).then(() => {
      this.snackBar.open(`${branch?.name} deleted successfully`, 'Close', {
        duration: 3000,
      });
      this.fetchOutlets();
    });
  }
}
