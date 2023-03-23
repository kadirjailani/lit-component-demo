import { fixture } from '@open-wc/testing';
import { expect } from '@esm-bundle/chai';
import { SuperSearch } from '../src/lit-webcomponent-demo';

describe("Test", () => {

  it("Props: Initial value of props to be empty", () => {
    const component = new SuperSearch();
    expect(component.labelValue).equal("");
    expect(component.inputValue).equal("");
    expect(component.searchDisplayValue).equal("");
  });

  it('Event: preventDefault to be triggered', async () => {
    const form = await fixture(new SuperSearch());
  
    form.querySelector('button').click();
  
    const { detail } = await oneDefaultPreventedEvent(el, 'submit');
  
    expect(detail).to.be.true;
  });
  

});