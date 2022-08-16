import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from "../../models/note/note";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit,AfterViewInit {
@Input() notes:Note[];
  displayedColumns: string[] = ['position','title', 'date'];
  dataSource :MatTableDataSource<Note>;
  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort:MatSort
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort
  }

  ngOnInit(): void {

    this.dataSource=new MatTableDataSource<Note>(this.notes)
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
