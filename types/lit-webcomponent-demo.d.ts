import { LitElement } from 'lit';
import 'fa-icons';
export declare class SuperSearch extends LitElement {
    labelValue: string;
    inputValue: string;
    searchDisplayValue: string;
    searchResult: string[];
    private clickHandler;
    private clearResult;
    private updateSuperInputValue;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'super-search': SuperSearch;
    }
}
