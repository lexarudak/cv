import ClassList from '../enums/classList';
import PageNames from '../enums/pageNames';
import contacts from '../htmlSections/contacts';
import Page from './page';

class ContactsPage extends Page {
  constructor() {
    super(PageNames.contacts);
  }

  protected makeContent() {
    const contactList = document.createElement('ul');
    contactList.classList.add(ClassList.list, ClassList.pageInner);
    contactList.setAttribute('itemscope', '');
    contactList.setAttribute('itemtype', 'http://schema.org/Organization');
    contactList.innerHTML = contacts;
    return contactList;
  }
}

export default ContactsPage;
