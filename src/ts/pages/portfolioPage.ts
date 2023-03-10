import PageNames from '../enums/pageNames';
import Page from './page';
import projectList from '../../projects.json';
import ProjectCard from '../components/projectCard';
import ClassList from '../enums/classList';

class PortfolioPage extends Page {
  constructor() {
    super(PageNames.portfolio);
  }

  private fillContent() {
    const container = document.createElement('div');
    container.classList.add(ClassList.projectCardList);
    projectList.projects.forEach((project) => {
      container.append(new ProjectCard(project).draw());
    });
    return container;
  }

  protected makeContent() {
    const content = this.fillContent();
    return content;
  }
}

export default PortfolioPage;
