import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlayersService } from '../service/players/players.service';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from './../interface/players';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-players-spain',
  templateUrl: './players-spain.component.html',
  styleUrls: ['./players-spain.component.scss'],
})
export class PlayersSpainComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['number', 'name', 'date', 'position'];
  players: any = [];
  playersCopy: any = [];
  loading: boolean = true;
  date: any = null;
  public dateLocalStorage: any = null;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('input') input!: ElementRef;

  constructor(private playersService: PlayersService) {}

  ngAfterViewInit() {
    this.playersService.getPlayers('spainTeam').subscribe((elem) => {
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

      if (localStorage.getItem('spainFilter')) {
        this.getLocalStorageParamsFilterInput();
      }

      if (localStorage.getItem('dateSpain')) {
        this.getLocalStorageParamsFilterDate();
      }
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('dateSpain')) {
      this.dateLocalStorage = JSON.parse(
        localStorage.getItem('dateSpain') || '{}'
      );
      // this.filterDate(this.dateLocalStorage);
    }
  }

  private getLocalStorageParamsFilterInput() {
    this.input.nativeElement.value = localStorage.getItem('spainFilter');
    this.players.filter = this.input.nativeElement.value.trim().toLowerCase();
  }

  private getLocalStorageParamsFilterDate() {
    this.date = JSON.parse(localStorage.getItem('dateSpain') || '{}');
    this.filterDate(this.date);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    localStorage.setItem('spainFilter',filterValue);
    this.players.filter = filterValue.toLowerCase();
  }

  filterDate(date: any) {
    localStorage.setItem('dateSpain', JSON.stringify(date));
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
    const date = JSON.parse(localStorage.getItem('dateSpain') || '{}');
    if (!localStorage.getItem('dateSpain')) {
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
    localStorage.removeItem('dateSpain');
    localStorage.removeItem('spainFilter');
    this.input.nativeElement.value = '';
    this.players.data = this.playersCopy;
  }
}
