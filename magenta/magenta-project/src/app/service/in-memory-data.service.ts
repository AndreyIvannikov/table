import { Injectable } from '@angular/core';
import { Player } from '../interface/players';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  constructor() {}
  createDb() {
    const spainTeam: Player[] = [
      {
        name: 'Д. де Хеа',
        number: 1,
        dateOfBirth: '07.11.1990',
        position: 'вратарь',
      },
      {
        name: 'Р. Санчес',
        number: 13,
        dateOfBirth: '11.18.1997',
        position: 'вратарь',
      },
      {
        name: 'С. Аспиликуэта',
        number: 2,
        dateOfBirth: '08.28.1989',
        position: 'защитник',
      },
      {
        name: 'Д. Льоренте',
        number: 1,
        dateOfBirth: '08.16.1993',
        position: 'защитник',
      },
      {
        name: 'Пау Торрес',
        number: 4,
        dateOfBirth: '11.07.1990',
        position: 'защитник',
      },
      {
        name: 'Э. Гарсия',
        number: 12,
        dateOfBirth: '01.09.2001',
        position: 'защитник',
      },
      {
        name: 'Хосе Гайя',
        number: 1,
        dateOfBirth: '05.25.1995',
        position: 'защитник',
      },
      {
        name: 'Жорди Альба',
        number: 18,
        dateOfBirth: '03.21.1989',
        position: 'защитник',
      },
      {
        name: 'С. Бускетс',
        number: 5,
        dateOfBirth: '07.16.1988',
        position: 'полузащитник',
      },
      {
        name: 'М. Льоренте',
        number: 6,
        dateOfBirth: '01.30.1995',
        position: 'полузащитник',
      },
      {
        name: 'Коке',
        number: 8,
        dateOfBirth: '01.08.1992',
        position: 'полузащитник',
      },
      {
        name: 'Тиагу Алькантара',
        number: 8,
        dateOfBirth: '04.11.1991',
        position: 'полузащитник',
      },
      {
        name: 'А. Мората',
        number: 7,
        dateOfBirth: '10.23.1992',
        position: 'нападающий',
      },
      {
        name: 'Ж. Морено',
        number: 9,
        dateOfBirth: '04.07.1992',
        position: 'нападающий',
      },
      {
        name: 'М. Ойярсабаль',
        number: 21,
        dateOfBirth: '04.07.1992',
        position: 'нападающий',
      },
      {
        name: 'Педри',
        number: 26,
        dateOfBirth: '11.25.2002',
        position: 'нападающий',
      },
    ];

    const switzerlandTeam: Player[] = [
      {
        name: 'Я. Зоммер',
        number: 1,
        dateOfBirth: '12.17.1988',
        position: 'вратарь',
      },
      {
        name: 'И. Мвого',
        number: 12,
        dateOfBirth: '06.06.1994',
        position: 'вратарь',
      },
      {
        name: 'С. Видмер',
        number: 3,
        dateOfBirth: '03.05.1993',
        position: 'защитник',
      },
      {
        name: 'Н. Эльведи',
        number: 4,
        dateOfBirth: '09.30.1996',
        position: 'защитник',
      },
      {
        name: 'М. Аканджи',
        number: 5,
        dateOfBirth: '07.19.1995',
        position: 'защитник',
      },
      {
        name: 'Р. Родригес',
        number: 13,
        dateOfBirth: '08.25.1992',
        position: 'защитник',
      },
      {
        name: 'Л. Бенито',
        number: 17,
        dateOfBirth: '01.07.1992',
        position: 'защитник',
      },
      {
        name: 'Д. Закария',
        number: 6,
        dateOfBirth: '11.20.1996',
        position: 'полузащитник',
      },
      {
        name: 'Р. Фройлер',
        number: 8,
        dateOfBirth: '04.15.1992',
        position: 'полузащитник',
      },
      {
        name: 'Г. Джака',
        number: 10,
        dateOfBirth: '09.27.1992',
        position: 'полузащитник',
      },
      {
        name: 'Руб. Варгас',
        number: 11,
        dateOfBirth: '08.05.1998',
        position: 'полузащитник',
      },
      {
        name: 'Б. Эмболо',
        number: 7,
        dateOfBirth: '02.14.1997',
        position: 'нападающий',
      },
      {
        name: 'Х. Сеферович',
        number: 9,
        dateOfBirth: '02.22.1992',
        position: 'нападающий',
      },
      {
        name: 'А. Мехмеди',
        number: 18,
        dateOfBirth: '03.16.1991',
        position: 'нападающий',
      },
      {
        name: 'М. Гавранович',
        number: 19,
        dateOfBirth: '11.24.1989',
        position: 'нападающий',
      },
    ];
    return { spainTeam, switzerlandTeam };
  }
}
