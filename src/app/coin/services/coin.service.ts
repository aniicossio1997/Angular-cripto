import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coin } from '../interfaces/coin.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private url: string =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  constructor(private http: HttpClient) {}
  getAllCoins() {
    return this.http.get<Coin[]>(this.url);
  }
}
