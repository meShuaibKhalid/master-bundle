import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TABLE_COLUMNS, TABLE_DATA, TABLE_DTO } from '../constants/constants';
import { TableInterface } from '../interfaces/custom-navigation.interface';


@Component({
  selector: 'app-sample-tables',
  templateUrl: './sample-tables.component.html',
  styleUrls: ['./sample-tables.component.scss']
})
export class SampleTablesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayColumns: string[] = TABLE_COLUMNS;
  dataSource = new MatTableDataSource(TABLE_DATA);
  
  tableDto = TABLE_DTO;
  userData: TableInterface;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  viewInfoRow(template: any, row: any) {
    this.userData = row;
    this.dialog.open(template)
  }
  closeDialog() {
    this.dialog.closeAll()
  }
}
