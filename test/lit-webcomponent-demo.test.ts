import { fixture, html } from '@open-wc/testing';
import { expect } from '@esm-bundle/chai';
import '../src/lit-webcomponent-demo';
import { SuperSearch } from '../src/lit-webcomponent-demo';

describe("super-search component", () => {

  it("Props: Initial value of props to be empty", () => {
    const component = new SuperSearch();

    expect(component.labelValue).equal("");
    expect(component.inputValue).equal("");
    expect(component.searchDisplayValue).equal("");
  });

  it('DOM: Load this component', async () => {
    const form = await fixture(new SuperSearch());
  
    await expect(form).shadowDom.to.be.accessible();
  });
  
  it('Event: onClick then check search result array to be available', async () => {
    const el = await fixture<SuperSearch>(html`<super-search></super-search>`);
    el.inputValue = "Test item 1";
    const inputDisplay = el.shadowRoot!.querySelector('input')!;
    const searchButton = el.shadowRoot!.querySelector('[aria-label="Search"]')!;
    // el.inputValue.click()!;
    
    expect(inputDisplay).to.exist;
    expect(searchButton).to.exist;
    // expect(el.searchResult).equal(["Test item 1"]);
  });
  

});