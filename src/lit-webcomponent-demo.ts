import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import 'fa-icons';

@customElement('super-search')
export class SuperSearch extends LitElement {

  // Declare properties
  @property({ type: String })
  labelValue = "";

  @property({ type: String })
  inputValue = "";

  @property({ type: String })
  searchDisplayValue = "";

  @property({ type: Array })
  searchResult : string[] = [];

  private clickHandler(e: Event) {
    e.preventDefault()
    this.searchDisplayValue = this.inputValue;
    this.searchResult.push(this.inputValue);
    
    // reset value
    this.inputValue = "";
    this.labelValue = "";
  }

  private async clearResult(){ 
    this.searchResult = [];
    await this.updateComplete;
  }

  private updateSuperInputValue(e: Event) {
    this.inputValue = (e.target as HTMLButtonElement).value;
    this.labelValue = this.inputValue.length > 3 ? "You can search anything here" : " ";
  }

  render() {
    return html`
      <form class="super-search">

        <label for="super" class="super-label">
          ${ this.labelValue }
        </label>

        <div class="input-wrapper">
        <input 
          name="super" 
          type="text"
          placeholder="Search"
          class="super-input"
          .value=${ this.inputValue }
          @input=${(e: Event) => this.updateSuperInputValue(e)}
         />

        <button 
          class="super-btn" 
          @click=${ this.clickHandler }
          ?disabled=${ !this.labelValue } 
        >
          <fa-icon class="fas fa-search" color="#000" size="14px"></fa-icon>
        </button>
        </div>
      </form>

      ${ this.searchResult.length > 0 ?
        html`
        <div class="search-result-header">
          <h4 class="title">Search history</h4>
          <button class="clear-button" @click=${ this.clearResult }>Clear</button>
        </div>`
        :
        html``}

      
      <ul class="search-result">
          ${
            this.searchResult.map((result: String) => html`
              <li>${ result }</li>
            `
          )}
      </ul>
    `
  }

  static styles = css`
    :host {
      width: 100%;
      padding: 0 10vw;
      color: #000;
    }

    .super-search {
      display:block;
      padding: 0 25px;
    }

    .super-label {
      height: 20px;
      display: block;
      width: 100%;
      font-size: 14px;
      margin: 0 0 5px 0;
    }

    .super-input {
      width: 100%;
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      box-sizing: border-box;
      background-color: #fff;
      color: black;
    }

    .super-btn {
      border: 0px;
      position: absolute;
      background-color: transparent;
      top: 0px;
      right: 0px;
      transform: translate(-10px, 65%);
    }
    .super-btn:hover {
      cursor: pointer;
    }

    .input-wrapper {
      position: relative;
    }

    .search-result-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      padding: 0px 25px;
    }

    .search-result-header .title {
      margin: 15px 0;
      padding: 0;
    }

    .clear-button {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      color: blue;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
    }

    .search-result {
      padding: 0 0 0 45px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'super-search': SuperSearch
  }
}
