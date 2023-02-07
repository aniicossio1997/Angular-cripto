import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from '../interfaces/coin.interfaces';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(coins: Coin[], page: number = 0, search: string = ''): Coin[] {
    if (search.length === 0) {
      return coins.slice(page, page + 5);
    }
    const filteredCoins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
    return filteredCoins.slice(page, page + 5);
  }
}
