import ClassList from '../enums/classList';

class CvSection {
  name: string;
  inner: string;

  constructor(name: string, inner: string) {
    this.name = name;
    this.inner = inner;
  }

  public draw() {
    const section = document.createElement('section');
    section.classList.add(ClassList.cvSection);
    section.innerHTML = this.inner;
    const name = document.createElement('h2');
    name.innerText = this.name;
    name.classList.add(ClassList.cvSectionName);
    section.prepend(name);
    return section;
  }
}

export default CvSection;
