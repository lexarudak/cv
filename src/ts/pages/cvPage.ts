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

class CvPage extends Page {
  constructor() {
    super(PageNames.cv);
  }

  protected makeContent() {
    const cv = document.createElement('div');
    cv.classList.add(ClassList.pageInner);
    hljs.registerLanguage('typescript', typescript);
    cv.append(
      new CvSection(CvSections.summary, summary).draw(),
      new CvSection(CvSections.education, education).draw(),
      new CvSection(CvSections.portfolio, portfolio).draw(),
      new CvSection(CvSections.codeExample, codeExample).draw(),
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
