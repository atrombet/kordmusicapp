import { KordmusicappPage } from './app.po';

describe('kordmusicapp App', () => {
  let page: KordmusicappPage;

  beforeEach(() => {
    page = new KordmusicappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
