import { Component, Event, EventEmitter, h, Host, State } from '@stencil/core';

import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'stock-finder',
  styleUrl: 'stock-finder.css',
  shadow: true,
})
export class StockFinder {
  stockNameInput: HTMLInputElement;

  @State() searchResults: { symbol: string; name: string }[] = [];
  @State() loading = false;

  @Event({ bubbles: true, composed: true }) symbolSelected: EventEmitter<string>;

  onFindStocks(event: Event) {
    event.preventDefault();
    this.loading = true;
    const stockName = this.stockNameInput.value;
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(parsedRes => {
        this.searchResults = parsedRes['bestMatches'].map(match => {
          return { symbol: match['1. symbol'], name: match['2. name'] };
        });
        this.loading = false;
      })
      .catch(err => {
        console.log(err.message);
        this.loading = false;
      });
  }

  onSymbolSelect(symbol: string) {
    this.symbolSelected.emit(symbol);
  }

  render() {
    let content = (
      <ul>
        {this.searchResults.map(result => (
          <li onClick={() => this.onSymbolSelect(result.symbol)}>
            <strong>{result.symbol}</strong> - {result.name}
          </li>
        ))}
      </ul>
    );
    if (this.loading) {
      content = <loading-spinner></loading-spinner>;
    }
    return (
      <Host>
        <form onSubmit={ev => this.onFindStocks(ev)}>
          <input type="text" id="stock-symbol" ref={el => (this.stockNameInput = el)} />
          <button type="submit">Find!</button>
        </form>
        {content}
      </Host>
    );
  }
}
