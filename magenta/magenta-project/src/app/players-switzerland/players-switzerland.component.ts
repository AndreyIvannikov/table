import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlayersService } from '../service/players/players.service';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from './../interface/players';
import { MatSort } from '@angular/material/sort';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-players-switzerland',
  templateUrl: './players-switzerland.component.html',
  styleUrls: ['./players-switzerland.component.scss'],
})
export class PlayersSwitzerlandComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['number', 'name', 'date', 'position'];
  players: any = [];
  playersCopy: any = [];
  date: any = null;
  public dateLocalStorage: any = null;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('input') input!: ElementRef;
  constructor(private playersService: PlayersService) {}

  ngAfterViewInit() {
    this.playersService.getPlayers('switzerlandTeam').subscribe((elem) => {
      this.players = new MatTableDataSource(this.filtersOnload(elem));
      this.playersCopy = elem;

      this.players.sortingDataAccessor = (item: any, property: any) => {
        switch (property) {
          case 'date':
            return new Date(item.dateOfBirth);
          default:
            return item[property];
        }
      };
      this.players.sort = this.sort;
      this.players.filterPredicate = (data: Player, filter: string) => {
        return data.name.toLowerCase().includes(filter.toLowerCase());
      };
      if (localStorage.getItem('switzerlandFilter')) {
        this.getLocalStorageParamsFilterInput();
      }
      if (localStorage.getItem('dateSwitzerland')) {
        this.getLocalStorageParamsFilterDate();
      }
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('dateSwitzerland')) {
      this.dateLocalStorage = JSON.parse(
        localStorage.getItem('dateSwitzerland') || '{}'
      );
      this.filterDate(this.dateLocalStorage);
    }
  }

  private getLocalStorageParamsFilterInput() {
    this.input.nativeElement.value = localStorage.getItem('switzerlandFilter');
    this.players.filter = this.input.nativeElement.value.trim().toLowerCase();
  }

  private getLocalStorageParamsFilterDate() {
    this.date = JSON.parse(localStorage.getItem('dateSwitzerland') || '{}');
    this.filterDate(this.date);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    localStorage.setItem('switzerlandFilter', filterValue);
    this.players.filter = filterValue.trim().toLowerCase();
  }

  filterDate(date: any) {
    localStorage.setItem('dateSwitzerland', JSON.stringify(date));
    this.date = date;
    this.players.data = this.playersCopy;
    this.players.data = this.players.data.filter((e: any) => {
      return (
        new Date(e.dateOfBirth) > new Date(this.date.startDate) &&
        new Date(e.dateOfBirth) < new Date(this.date.endDate)
      );
    });
  }

  filtersOnload(elem: any) {
    const date = JSON.parse(localStorage.getItem('dateSwitzerland') || '{}');
    if (!localStorage.getItem('dateSwitzerland')) {
      return elem;
    } else {
      return elem.filter((e: any) => {
        return (
          new Date(e.dateOfBirth) > new Date(date.startDate) &&
          new Date(e.dateOfBirth) < new Date(date.endDate)
        );
      });
    }
  }

  clearForm() {
    localStorage.removeItem('dateSwitzerland');
    localStorage.removeItem('switzerlandFilter');
    this.input.nativeElement.value = '';
    this.players.data = this.playersCopy;
  }
}
