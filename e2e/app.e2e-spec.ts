import { NgLdPage } from './app.po';

describe('ng-ld App', function() {
  let page: NgLdPage;

  beforeEach(() => {
    page = new NgLdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
