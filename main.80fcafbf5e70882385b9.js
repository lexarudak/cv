!function(){"use strict";var t={91:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},679:function(t,e,o){t.exports=o.p+"assets/logo.png"}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),o.b=document.baseURI||self.location.href,function(){var t=o(91),e=o.n(t),n=new URL(o(679),o.b);e()(n);var s=class{constructor(t){this.name=t}makeNewPage(){const t=this.makeTitle(),e=this.makeContent(),o=document.createElement("div");return o.classList.add("page","page_hide"),o.append(t,e),o}makeTitle(){const t=document.createElement("h2");return t.classList.add("subtitle"),t.innerText=this.name,t}makeContent(){const t=document.createElement("div");return t.innerText="New content",t}appendPage(t,e){t.innerHTML="",t.append(e),setTimeout((()=>{e.classList.remove("page_hide")}),0)}refreshContent(t,e){const o=this.makeNewPage();t instanceof HTMLElement?(t.classList.add("page_hide"),t.addEventListener("transitionend",(()=>{this.appendPage(e,o)}),{once:!0})):this.appendPage(e,o)}draw(){const t=document.querySelector(".main");if(!(t instanceof HTMLElement))throw new Error("no container");const e=t.firstChild;this.refreshContent(e,t)}},i=class extends s{constructor(){super("Contacts")}},a=class extends s{constructor(){super("CV")}},r=JSON.parse('{"q":[{"photo":"url(\'./assets/project_photos/routine.webp\')","bgPosition":"right","title":"Routine","description":"Application for the distribution of your time. Done as part of a team. A detailed description and navigation of the application can be found in the open PR. The application is written without the use of libraries and frameworks. \\n\\nParticipation in the project:\\n - Team leader\\n - Application idea\\n - App design\\n - Page of the week\\n - Page of the day\\n - Registration page\\n - plan creating popup","repo":"https://github.com/lexarudak/routine/pull/64","deploy":"https://lexarudak-rsclone.netlify.app/","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rsclone/rsclone.md"},{"photo":"url(\'./assets/project_photos/online_store.webp\')","bgPosition":"left","title":"Online Store","description":"Online store application. Done as part of a team without the use of frameworks and libraries. \\n\\nParticipation in the project:\\n -Team leader\\n- Routing\\n- Product page\\n- Cart Page\\n- Purchase checkout popup\\n- Responsive design","repo":"https://github.com/lexarudak/online-store/pull/28","deploy":"https://lexarudak-online-store.netlify.app/catalog?stock=1-65&price=1-100","task":"https://github.com/rolling-scopes-school/tasks/tree/master/tasks/online-store-team"},{"photo":"url(\'./assets/project_photos/songbird.webp\')","bgPosition":"center","title":"Songbird","description":"The app is a quiz. It is necessary to guess the bird by its singing. For each incorrect answer, the number of points for a correct answer decreases by 1. You can read more about the rules in the task.\\n\\nApplication features:\\n- Work with many custom audio players\\n- Generation of answer cards\\n- Responsive design\\n- Unique design","repo":"https://github.com/lexarudak/songbird/tree/develop","deploy":"https://rolling-scopes-school.github.io/lexarudak-JSFE2022Q3/songbird/index.html","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird/songbird-2022q3.md"},{"photo":"url(\'./assets/project_photos/gem_puzzle.webp\')","bgPosition":"center","title":"Gem puzzle","description":"15 puzzle game. My first application where an empty html file is filled with js.\\n\\nApplication features:\\n- Tiles movement animation\\n- Move tiles with click and drag and drop\\n- Keeping statistics of winners\\n- Only solvable tasks are allowed","repo":"https://github.com/lexarudak/gem-puzzle/tree/develop","deploy":"https://rolling-scopes-school.github.io/lexarudak-JSFE2022Q3/gem-puzzle/index.html","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-1/dom-api/codejam-the-gem-puzzle.md"},{"photo":"url(\'./assets/project_photos/online_zoo.webp\')","bgPosition":"center","title":"Online zoo","description":"Layout of two pages of the site according to the finished layout in Figma. The work was checked using pixel perfect on 4 screen sizes. Responsive design tested on screen sizes between breakpoints.\\n\\nApplication features:\\n- Carousel on homepage\\n- Slider with comments on the main page\\n- Clicking on a comment opens a popup with it\\n- Selecting the donation amount on the \'Donate\' page\\n- Responsive design","repo":"https://github.com/lexarudak/online-zoo/tree/develop","deploy":"https://rolling-scopes-school.github.io/lexarudak-JSFE2022Q3/online-zoo/pages/donate/donate.html","task":"https://github.com/rolling-scopes-school/tasks/tree/master/stage1/stream2/online-zoo"},{"photo":"url(\'./assets/project_photos/eldritch.webp\')","bgPosition":"center","title":"Eldritch Horror Codejam","description":"helper for Eldritch Horror game. The application shuffles the deck according to the selected character and difficulty level.\\n\\nApplication features:\\n- Deck mixing algorithm\\n- Animation of flipping cards\\n- Unique design","repo":"https://github.com/lexarudak/codejam-eldritch/tree/solve","deploy":"https://lexarudak.github.io/codejam-eldritch/","task":"https://github.com/lexarudak/codejam-eldritch/tree/main"},{"photo":"url(\'./assets/project_photos/momentum.webp\')","bgPosition":"center","title":"Momentum","description":"An analogue of the extension of the same name for Google Chrome. In the application settings, you can change the source of photos. Some of them may be blocked in your region.\\n\\nApplication features:\\n- Custom player\\n- Weather widget\\n- clock widget\\n- Ability to hide widgets\\n-ToDo list\\n- Widget with quotes\\n- Set screensavers from 3 sources","repo":"https://github.com/lexarudak/momentum_for_chrome","deploy":"https://lexarudak.github.io/momentum_for_chrome/","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/momentum/momentum-stage1.md"},{"photo":"url(\'./assets/project_photos/travel.webp\')","bgPosition":"left","title":"Travel","description":"My first application. Layout of the page according to the finished layout in Figma.\\n\\nApplication features:\\n- Carousel\\n- Login popup\\n- Burger menu\\n- Responsive design","repo":"https://github.com/lexarudak/travel_my","deploy":"https://lexarudak.github.io/travel_my","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/travel/travel.md"}]}'),c=class extends s{constructor(){super("Portfolio")}fillContent(){const t=document.createElement("div");return t.classList.add("project-card-list"),r.q.forEach((e=>{t.append(new class{constructor(t){this.projectInfo=t}makeCard(){console.log("done");const t=document.createElement("div");return t.classList.add("project-card"),t.style.backgroundImage=this.projectInfo.photo,t.style.backgroundPosition=this.projectInfo.bgPosition,t}makeImg(){const t=document.createElement("div");return t.classList.add("project-card__img"),t}makeInfo(){const t=document.createElement("div");return t.classList.add("project-card__info"),t.append(this.makeTitle(),this.makeText(),this.makeLinkList()),t}makeTitle(){const t=document.createElement("h3");return t.classList.add("project-card__title"),t.innerText=this.projectInfo.title,t}makeText(){const t=document.createElement("p");return t.classList.add("project-card__text"),t.innerText=this.projectInfo.description,t}makeLinkList(){const t=this.makeLink("Repo",this.projectInfo.repo),e=this.makeLink("Deploy",this.projectInfo.deploy),o=this.makeLink("Task",this.projectInfo.task),n=document.createElement("div");return n.append(t,e,o),n.classList.add("project-card__link-list"),n}makeLink(t,e){const o=document.createElement("a");return o.classList.add("project-card__link"),o.innerText=t,o.href=e,o.setAttribute("target","_blank"),o}draw(){const t=this.makeCard();return t.append(this.makeImg(),this.makeInfo()),t}}(e).draw())})),t}makeContent(){return this.fillContent()}};(new class{constructor(){this.nav=new class{constructor(){this.cvBtn=this.createNavButton("CV"),this.portfolioBtn=this.createNavButton("Portfolio"),this.contactsBtn=this.createNavButton("Contacts"),this.cvPage=new a,this.portfolioPage=new c,this.contactsPage=new i}createNavButton(t){const e=document.createElement("div");return e.classList.add("nav__button"),e.id=t,e.innerText=t,e.addEventListener("click",(()=>this.swipePage(t))),e.addEventListener("click",(()=>this.changeActiveButton(t))),e}changeActiveButton(t){[this.cvBtn,this.portfolioBtn,this.contactsBtn].forEach((e=>{e.id===t?e.classList.add("nav__button_active"):e.classList.remove("nav__button_active")}))}swipePage(t){switch(t){case"CV":this.cvPage.draw();break;case"Portfolio":this.portfolioPage.draw();break;case"Contacts":this.contactsPage.draw()}}draw(){const t=document.querySelector(".nav");t&&(this.cvBtn.classList.add("nav__button_active"),t.append(this.cvBtn,this.portfolioBtn,this.contactsBtn),this.cvPage.draw())}}}start(){this.nav.draw()}}).start()}()}();