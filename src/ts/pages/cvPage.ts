import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import CvSection from '../components/cvSection';
import ClassList from '../enums/classList';
import CvSections from '../enums/cvSections';
import PageNames from '../enums/pageNames';
import Page from './page';
import summary from '../htmlSections/summary';
import portfolio from '../htmlSections/portfolio';
import education from '../htmlSections/education';
import codeExample from '../htmlSections/codeExample';
import languages from '../htmlSections/languages';
import professionalExperience from '../htmlSections/professionalExperience';
import code from '../htmlSections/code';
import skills from '../htmlSections/skills';

class CvPage extends Page {
  goTo;

  constructor(goTo: (name: PageNames) => void) {
    super(PageNames.cv);
    this.goTo = goTo;
  }

  protected makeTitle() {
    const title = document.createElement('div');
    title.classList.add(ClassList.cvTitle);
    const titleText = document.createElement('h2');
    titleText.classList.add(ClassList.subtitle);
    titleText.innerText = this.name;

    const titleBtn = document.createElement('a');
    titleBtn.classList.add(ClassList.button);
    titleBtn.href = './assets/CV Aliaksei Rudak.pdf';
    titleBtn.innerText = 'Download';
    titleBtn.setAttribute('download', 'CV Aliaksei Rudak');

    title.append(titleText, titleBtn);
    return title;
  }

  protected makeContent() {
    hljs.registerLanguage('typescript', typescript);

    const cv = document.createElement('div');
    cv.classList.add(ClassList.pageInner);

    const portfolioSection = new CvSection(CvSections.portfolio, portfolio).draw();
    portfolioSection.addEventListener('click', () => {
      this.goTo(PageNames.portfolio);
      window.scrollTo(0, 0);
    });

    cv.append(
      new CvSection(CvSections.summary, summary).draw(),
      new CvSection(CvSections.education, education).draw(),
      portfolioSection,
      new CvSection(CvSections.codeExample, codeExample).draw(),
      new CvSection(CvSections.skills, skills).draw(),
      new CvSection(CvSections.professionalExperience, professionalExperience).draw(),
      new CvSection(CvSections.languages, languages).draw()
    );

    const codeContainer = cv.querySelector('code');
    if (codeContainer) {
      codeContainer.innerHTML = code;
      hljs.highlightBlock(codeContainer);
    }
    return cv;
  }
}

export default CvPage;
