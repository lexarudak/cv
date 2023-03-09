import ClassList from './enums/classList';
import PageNames from './enums/pageNames';
import ContactsPage from './pages/contactsPage';
import CvPage from './pages/cvPage';
import PortfolioPage from './pages/portfolioPage';

class Nav {
  cvBtn: HTMLDivElement;
  portfolioBtn: HTMLDivElement;
  contactsBtn: HTMLDivElement;

  cvPage: CvPage;
  portfolioPage: PortfolioPage;
  contactsPage: ContactsPage;

  constructor() {
    this.cvBtn = this.createNavButton(PageNames.cv);
    this.portfolioBtn = this.createNavButton(PageNames.portfolio);
    this.contactsBtn = this.createNavButton(PageNames.contacts);

    this.cvPage = new CvPage();
    this.portfolioPage = new PortfolioPage();
    this.contactsPage = new ContactsPage();
  }

  private createNavButton(name: PageNames) {
    const btn = document.createElement('div');
    btn.classList.add(ClassList.navButton);
    btn.id = name;
    btn.innerText = name;
    btn.addEventListener('click', () => this.swipePage(name));
    btn.addEventListener('click', () => this.changeActiveButton(name));
    return btn;
  }

  private changeActiveButton(name: PageNames) {
    const buttons = [this.cvBtn, this.portfolioBtn, this.contactsBtn];
    buttons.forEach((btn) => {
      if (btn.id === name) {
        btn.classList.add(ClassList.navButtonActive);
      } else {
        btn.classList.remove(ClassList.navButtonActive);
      }
    });
  }

  private swipePage(name: PageNames) {
    switch (name) {
      case PageNames.cv:
        this.cvPage.draw();
        break;
      case PageNames.portfolio:
        this.portfolioPage.draw();
        break;
      case PageNames.contacts:
        this.contactsPage.draw();
        break;

      default:
        break;
    }
  }

  public draw() {
    const nav = document.querySelector(`.${ClassList.nav}`);
    if (nav) {
      this.cvBtn.classList.add(ClassList.navButtonActive);
      nav.append(this.cvBtn, this.portfolioBtn, this.contactsBtn);
      this.cvPage.draw();
    }
  }
}

export default Nav;
