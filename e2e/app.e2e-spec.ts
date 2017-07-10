import { Assing2componentPage } from './app.po';

describe('assing2component App', () => {
  let page: Assing2componentPage;

  beforeEach(() => {
    page = new Assing2componentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
