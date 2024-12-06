import { Component, OnInit } from '@angular/core';
import { urlConstants } from '../core/constants.ts/url';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  startDate: any = new Date();
  endDate: any = new Date();
  selectedStatus: string = 'Completed';

  statuses: string[] = ['Pending', 'Completed', 'Cancelled'];
  constructor(private apiService: HttpService) {}
  orders: any = [];

  ngOnInit() {
    this.getReport();
  }
  getReport() {
    const toDate = new Date(this.startDate);
    const formattedToDate = `${toDate.getFullYear()}-${String(
      toDate.getMonth() + 1
    ).padStart(2, '0')}-${String(toDate.getDate()).padStart(2, '0')}`;
    console.log(formattedToDate, 'formattedToDate');

    const fromDate = new Date(this.endDate);
    const formattedFromDate = `${fromDate.getFullYear()}-${String(
      fromDate.getMonth() + 1
    ).padStart(2, '0')}-${String(fromDate.getDate()).padStart(2, '0')}`;
    console.log(formattedFromDate, 'formattedFromDate');
    const payload = {
      url: `${
        urlConstants.ADMIN_ORDERS
      }${formattedToDate}&endDate=${formattedFromDate}&status=${
        this.selectedStatus || ''
      }`,
    };

    this.apiService.get(payload).then((resp: any) => {
      this.orders = resp.data;
      console.log(resp, 'resp');
    });
  }
}
