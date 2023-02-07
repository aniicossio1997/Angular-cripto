import { Component, OnInit } from '@angular/core';
import { Coin } from '../interfaces/coin.interfaces';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-coinlist',
  templateUrl: './coinlist.component.html',
  styleUrls: ['./coinlist.component.css'],
})
export class CoinlistComponent implements OnInit {
  titles: string[] = ['#', 'Coin', 'Price', 'Price change 24h', '24h Volume'];
  coins: Coin[] = [];
  page: number = 0;
  search: string = '';
  private total_coins: number = 100;
  constructor(private coinService: CoinService) {}
  ngOnInit(): void {
    this.coinService.getAllCoins().subscribe(
      (coins) => {
        this.coins = coins;
      },
      (err) => console.log(err)
    );
  }
  nextPage() {
    this.page += 5;
  }
  prevPage() {
    if (this.page > 0) {
      this.page -= 5;
    }
  }
  onSearchCoin(search: string) {
    this.page = 0;
    this.search = search;
  }
}
