import { html, fixture, expect } from '@open-wc/testing';
import { fake } from 'sinon';
import './lit-webcomponent-demo';
import { SuperSearch } from './lit-webcomponent-demo';

describe('my-test', () => {
    it('works', async () => {
        const el = await fixture(html` <my-element></my-element> `);
    });
});