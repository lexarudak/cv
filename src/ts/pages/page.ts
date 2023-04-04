import ClassList from '../enums/classList';
import PageNames from '../enums/pageNames';

class Page {
  name: PageNames;

  constructor(name: PageNames) {
    this.name = name;
  }

  private makeNewPage() {
    const title = this.makeTitle();
    const content = this.makeContent();
    const newPage = document.createElement('div');
    newPage.classList.add(ClassList.page, ClassList.pageHide);
    newPage.append(title, content);
    return newPage;
  }

  protected makeTitle() {
    const title = document.createElement('h2');
    title.classList.add(ClassList.subtitle);
    title.innerText = this.name;
    return title;
  }

  protected makeContent(): HTMLElement {
    const content = document.createElement('div');
    content.innerText = 'New content';
    return content;
  }

  private appendPage(container: HTMLElement, page: HTMLElement) {
    container.innerHTML = '';
    container.append(page);
    setTimeout(() => {
      page.classList.remove(ClassList.pageHide);
    }, 0);
  }

  protected refreshContent(oldContent: ChildNode | null, container: HTMLElement) {
    const newPage = this.makeNewPage();

    if (oldContent instanceof HTMLElement) {
      oldContent.classList.add(ClassList.pageHide);
      oldContent.addEventListener(
        'transitionend',
        () => {
          this.appendPage(container, newPage);
        },
        { once: true }
      );
    } else {
      this.appendPage(container, newPage);
    }
  }

  public draw() {
    const container = document.querySelector(`.${ClassList.main}`);
    if (!(container instanceof HTMLElement)) throw new Error('no container');
    const oldPage = container.firstChild;
    this.refreshContent(oldPage, container);
  }
}

export default Page;
