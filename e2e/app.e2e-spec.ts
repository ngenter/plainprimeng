import { MinutesPage } from './app.po';

describe('minutes App', function() {
  let page: MinutesPage;

  beforeEach(() => {
    page = new MinutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
