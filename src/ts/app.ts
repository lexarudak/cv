import Nav from './nav';

class App {
  nav: Nav;

  constructor() {
    this.nav = new Nav();
  }

  start() {
    this.nav.draw();
  }
}

export default App;
