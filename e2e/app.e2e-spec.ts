import { AngularPipesPage } from './app.po';

describe('angular-pipes App', () => {
  let page: AngularPipesPage;

  beforeEach(() => {
    page = new AngularPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
