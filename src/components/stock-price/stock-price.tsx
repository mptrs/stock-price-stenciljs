import { Component, Element, h, Host, Listen, Prop, State, Watch } from '@stencil/core';

import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
})
export class StockPrice {
  // used incombination with reference (ref=)
  stockInput: HTMLInputElement;

  // initialStockSymbol: string;

  // reference to our webcomponent
  @Element() el: HTMLElement;

  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() error: string;
  @State() loading = false;

  @Prop({ mutable: true, reflect: true }) stockSymbol: string;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.stockUserInput = newValue;
      this.stockInputValid = true;
      this.fetchStockPrice(newValue);
    }
  }

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    if (this.stockUserInput.trim() !== '') {
      this.stockInputValid = true;
    } else {
      this.stockInputValid = false;
    }
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    // const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
    this.stockSymbol = this.stockInput.value; // watch will trigger and do the fetch
  }

  connectedCallback() {
    console.log('connectedCallback');
  }

  componentWillLoad() {
    console.log('componentWillLoad', this.stockSymbol);
    if (this.stockSymbol) {
      // this.initialStockSymbol = this.stockSymbol;
      this.stockUserInput = this.stockSymbol;
      this.stockInputValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentDidLoad() {
    console.log('componentDidLoad');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // if (this.stockSymbol !== this.initialStockSymbol) {
    //   this.initialStockSymbol = this.stockSymbol;
    //   this.fetchStockPrice(this.stockSymbol);
    // }
  }

  disconnectedCallback() {
    console.log('disconnectedCallback');
  }

  @Listen('symbolSelected', { target: 'body' })
  onStockSymbolSelected(event: CustomEvent) {
    if (event.detail && event.detail !== this.stockSymbol) {
      console.log(event.detail);
      this.stockSymbol = event.detail;
    }
  }

  fetchStockPrice(stockSymbol: string) {
    this.loading = true;
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        if (!parsedRes['Global Quote']['05. price']) {
          throw new Error('Invalid symbol!');
        }
        this.error = null;
        this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        this.loading = false;
      })
      .catch(err => {
        this.error = err.message;
        this.fetchedPrice = null;
        this.loading = false;
      });
  }

  render() {
    let dataContent = <p>Please enter a symbol</p>;
    if (this.error) {
      dataContent = <p>{this.error}</p>;
    }
    if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>;
    }
    if (this.loading) {
      dataContent = <loading-spinner></loading-spinner>;
    }
    return (
      <Host class={this.error ? 'error' : ''}>
        <form onSubmit={ev => this.onFetchStockPrice(ev)}>
          <input type="text" id="stock-symbol" ref={el => (this.stockInput = el)} value={this.stockUserInput} onInput={ev => this.onUserInput(ev)} />
          <button type="submit" disabled={!this.stockInputValid || this.loading}>
            Fetch
          </button>
        </form>
        <div>{dataContent}</div>
      </Host>
    );
  }
}
