import { Ng2SpockPage } from './app.po';

describe('ng2-spock App', function() {
  let page: Ng2SpockPage;

  beforeEach(() => {
    page = new Ng2SpockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
