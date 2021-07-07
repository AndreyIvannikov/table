import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../service/players/players.service';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayers("").subscribe((elem) => console.log(elem));
  }
}
