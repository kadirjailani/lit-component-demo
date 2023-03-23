import { css as h, LitElement as d, html as n } from "lit";
import { property as u, customElement as f } from "lit/decorators.js";
import { LitElement as b, css as g, html as m } from "lit-element";
class x extends b {
  static get properties() {
    return {
      color: String,
      iClass: { attribute: "class" },
      src: String,
      style: String,
      size: String,
      pathPrefix: { attribute: "path-prefix" }
    };
  }
  static get styles() {
    return g`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }
      :host svg {
        fill: var(--fa-icon-fill-color, currentcolor);
        width: var(--fa-icon-width, 19px);
        height: var(--fa-icon-height, 19px);
      }
    `;
  }
  getSources(a) {
    const o = {
      fas: "solid",
      far: "regular",
      fal: "light",
      fab: "brands",
      fa: "solid"
    }, i = (s) => {
      let c = s.split(" ");
      return [o[c[0]], t(c[1])];
    }, t = (s) => s.replace("fa-", "");
    let l = i(a);
    return `${this.pathPrefix}/@fortawesome/fontawesome-free/sprites/${l[0]}.svg#${l[1]}`;
  }
  constructor() {
    super(), this.iClass = "", this.src = "", this.style = "", this.size = "", this.color = "", this.pathPrefix = "node_modules";
  }
  firstUpdated() {
    this.src = this.getSources(this.iClass);
  }
  _parseStyles() {
    return `
      ${this.size ? `width: ${this.size};` : ""}
      ${this.size ? `height: ${this.size};` : ""}
      ${this.color ? `fill: ${this.color};` : ""}
      ${this.style}
    `;
  }
  render() {
    return m`
      <svg 
        .style="${this._parseStyles()}">
        <use 
          href="${this.src}">
        </use>
      </svg>
    `;
  }
}
customElements.define("fa-icon", x);
var y = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, p = (e, a, o, i) => {
  for (var t = i > 1 ? void 0 : i ? $(a, o) : a, l = e.length - 1, s; l >= 0; l--)
    (s = e[l]) && (t = (i ? s(a, o, t) : s(t)) || t);
  return i && t && y(a, o, t), t;
};
let r = class extends d {
  constructor() {
    super(...arguments), this.labelValue = "", this.inputValue = "", this.searchDisplayValue = "", this.searchResult = [];
  }
  clickHandler(e) {
    e.preventDefault(), this.searchDisplayValue = this.inputValue, this.searchResult.push(this.inputValue), this.inputValue = "", this.labelValue = "";
  }
  async clearResult() {
    this.searchResult = [], await this.updateComplete;
  }
  updateSuperInputValue(e) {
    this.inputValue = e.target.value, this.labelValue = this.inputValue.length > 3 ? "You can search anything here" : " ";
  }
  render() {
    return n`
      <form class="super-search">

        <label for="super" class="super-label">
          ${this.labelValue}
        </label>

        <div class="input-wrapper">
        <input 
          name="super" 
          type="text"
          placeholder="Search"
          class="super-input"
          .value=${this.inputValue}
          @input=${(e) => this.updateSuperInputValue(e)}
         />

        <button 
          class="super-btn" 
          @click=${this.clickHandler}
          ?disabled=${!this.labelValue} 
        >
          <fa-icon class="fas fa-search" color="#000" size="14px"></fa-icon>
        </button>
        </div>
      </form>

      ${this.searchResult.length > 0 ? n`
        <div class="search-result-header">
          <h4 class="title">Search history</h4>
          <button class="clear-button" @click=${this.clearResult}>Clear</button>
        </div>` : n``}

      
      <ul class="search-result">
          ${this.searchResult.map(
      (e) => n`
              <li>${e}</li>
            `
    )}
      </ul>
    `;
  }
};
r.styles = h`
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
  `;
p([
  u({ type: String })
], r.prototype, "labelValue", 2);
p([
  u({ type: String })
], r.prototype, "inputValue", 2);
p([
  u({ type: String })
], r.prototype, "searchDisplayValue", 2);
p([
  u({ type: Array })
], r.prototype, "searchResult", 2);
r = p([
  f("super-search")
], r);
export {
  r as SuperSearch
};
