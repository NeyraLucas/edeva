import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TableService } from '../services/table.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements AfterViewInit  {

   //init table
   displayedColumns: string[] = ['title', 'year', 'cast', 'genres'];
   data: any[] = [];
   dataSource = new MatTableDataSource(this.data);

   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;

   constructor(private _service: TableService ) {
   }

   ngAfterViewInit() {
     this._service.GetDataFromGitHub().subscribe((movies) =>{
       this.dataSource = new MatTableDataSource(movies);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;

     });


   }

   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();

     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }

   //end table

}
