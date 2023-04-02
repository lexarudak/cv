import { ProjectInfo } from '../base/types';
import ClassList from '../enums/classList';

class ProjectCard {
  projectInfo: ProjectInfo;

  constructor(projectInfo: ProjectInfo) {
    this.projectInfo = projectInfo;
  }

  private makeCard() {
    const card = document.createElement('div');
    card.classList.add(ClassList.projectCard);
    card.style.backgroundImage = this.projectInfo.photo;
    card.style.backgroundPosition = this.projectInfo.bgPosition;
    return card;
  }

  private makeInfo() {
    const info = document.createElement('div');
    info.classList.add(ClassList.projectCardInfo);
    info.append(this.makeTitle(), this.makeTechStack(), this.makeText(), this.makeLinkList());
    return info;
  }

  private makeTitle() {
    const title = document.createElement('h3');
    title.classList.add(ClassList.projectCardTitle);
    title.innerText = this.projectInfo.title;
    return title;
  }

  private makeTechStack() {
    const stack = document.createElement('p');
    stack.classList.add(ClassList.projectCardStack);
    stack.innerText = this.projectInfo.techStack;
    return stack;
  }

  private makeText() {
    const text = document.createElement('p');
    text.classList.add(ClassList.projectCardText);
    text.innerText = this.projectInfo.description;
    return text;
  }

  private makeLinkList() {
    const repo = this.makeLink('Repo', this.projectInfo.repo);
    const deploy = this.makeLink('Deploy', this.projectInfo.deploy);
    const task = this.makeLink('Task', this.projectInfo.task);
    const links = document.createElement('div');
    links.append(repo, deploy, task);
    links.classList.add(ClassList.projectCardLinkList);
    return links;
  }

  private makeLink(name: string, url: string) {
    const link = document.createElement('a');
    link.classList.add(ClassList.projectCardLink);
    link.innerText = name;
    link.href = url;
    link.setAttribute('target', '_blank');
    return link;
  }

  public draw() {
    const card = this.makeCard();
    card.append(this.makeInfo());
    return card;
  }
}

export default ProjectCard;
