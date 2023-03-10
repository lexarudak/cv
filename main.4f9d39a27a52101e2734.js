!function(){"use strict";var e={91:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},679:function(e,t,o){e.exports=o.p+"assets/logo.png"}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),o.b=document.baseURI||self.location.href,function(){var e=o(91),t=o.n(e),n=new URL(o(679),o.b);t()(n);var s=class{constructor(e){this.name=e}makeNewPage(){const e=this.makeTitle(),t=this.makeContent(),o=document.createElement("div");return o.classList.add("page","page_hide"),o.append(e,t),o}makeTitle(){const e=document.createElement("h2");return e.classList.add("subtitle"),e.innerText=this.name,e}makeContent(){const e=document.createElement("div");return e.innerText="New content",e}appendPage(e,t){e.innerHTML="",e.append(t),setTimeout((()=>{t.classList.remove("page_hide")}),0)}refreshContent(e,t){const o=this.makeNewPage();e instanceof HTMLElement?(e.classList.add("page_hide"),e.addEventListener("transitionend",(()=>{this.appendPage(t,o)}),{once:!0})):this.appendPage(t,o)}draw(){const e=document.querySelector(".main");if(!(e instanceof HTMLElement))throw new Error("no container");const t=e.firstChild;this.refreshContent(t,e)}},a=class extends s{constructor(){super("Contacts")}},i=class extends s{constructor(){super("CV")}},r=JSON.parse('{"q":[{"photo":"url(\'./assets/project_photos/routine.webp\')","title":"Routine","description":"Application for the distribution of your time. Done as part of a team. A detailed description and navigation of the application can be found in the open PR. The application is written without the use of libraries and frameworks. \\n\\nParticipation in the project:\\n - Team leader\\n - Application idea\\n - App design\\n - Page of the week\\n - Page of the day\\n - Registration page\\n - plan creating popup","repo":"https://github.com/lexarudak/routine/pull/64","deploy":"https://lexarudak-rsclone.netlify.app/","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rsclone/rsclone.md"},{"photo":"url(\'./assets/project_photos/online_store.webp\')","title":"Online Store","description":"Online store application. Done as part of a team without the use of frameworks and libraries. \\n\\nParticipation in the project:\\n -Team leader\\n- Routing\\n- Product page\\n- Cart Page\\n- Purchase checkout popup\\n- Responsive design","repo":"https://github.com/lexarudak/online-store/pull/28","deploy":"https://lexarudak-online-store.netlify.app/catalog?stock=1-65&price=1-100","task":"https://github.com/rolling-scopes-school/tasks/tree/master/tasks/online-store-team"},{"photo":"url(\'./assets/project_photos/songbird.webp\')","title":"Songbird","description":"The app is a quiz. It is necessary to guess the bird by its singing. For each incorrect answer, the number of points for a correct answer decreases by 1. You can read more about the rules in the task.\\n\\nApplication features:\\n- Work with many custom audio players\\n- Generation of answer cards\\n- Responsive design\\n- Unique design","repo":"https://github.com/lexarudak/songbird/tree/develop","deploy":"https://rolling-scopes-school.github.io/lexarudak-JSFE2022Q3/songbird/index.html","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird/songbird-2022q3.md"},{"photo":"url(\'./assets/project_photos/gem_puzzle.webp\')","title":"Gem puzzle","description":"15 puzzle game. My first application where an empty html file is filled with js.\\n\\nApplication features:\\n- Tiles movement animation\\n- Move tiles with click and drag and drop\\n- Keeping statistics of winners\\n- Only solvable tasks are allowed","repo":"https://github.com/lexarudak/gem-puzzle/tree/develop","deploy":"https://rolling-scopes-school.github.io/lexarudak-JSFE2022Q3/gem-puzzle/index.html","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-1/dom-api/codejam-the-gem-puzzle.md"},{"photo":"url(\'./assets/project_photos/online_zoo.webp\')","title":"Online zoo","description":"Layout of two pages of the site according to the finished layout in Figma. The work was checked using pixel perfect on 4 screen sizes. Responsive design tested on screen sizes between breakpoints.\\n\\nApplication features:\\n- Carousel on homepage\\n- Slider with comments on the main page\\n- Clicking on a comment opens a popup with it\\n- Selecting the donation amount on the \'Donate\' page\\n- Responsive design","repo":"https://github.com/lexarudak/online-zoo/tree/develop","deploy":"https://rolling-scopes-school.github.io/lexarudak-JSFE2022Q3/online-zoo/pages/donate/donate.html","task":"https://github.com/rolling-scopes-school/tasks/tree/master/stage1/stream2/online-zoo"},{"photo":"url(\'./assets/project_photos/eldritch.webp\')","title":"Eldritch Horror Codejam","description":"helper for Eldritch Horror game. The application shuffles the deck according to the selected character and difficulty level.\\n\\nApplication features:\\n- Deck mixing algorithm\\n- Animation of flipping cards\\n- Unique design","repo":"https://github.com/lexarudak/codejam-eldritch/tree/solve","deploy":"https://lexarudak.github.io/codejam-eldritch/","task":"https://github.com/lexarudak/codejam-eldritch/tree/main"},{"photo":"url(\'./assets/project_photos/momentum.webp\')","title":"Momentum","description":"An analogue of the extension of the same name for Google Chrome. In the application settings, you can change the source of photos. Some of them may be blocked in your region.\\n\\nApplication features:\\n- Custom player\\n- Weather widget\\n- clock widget\\n- Ability to hide widgets\\n-ToDo list\\n- Widget with quotes\\n- Set screensavers from 3 sources","repo":"https://github.com/lexarudak/momentum_for_chrome","deploy":"https://lexarudak.github.io/momentum_for_chrome/","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/momentum/momentum-stage1.md"},{"photo":"url(\'./assets/project_photos/travel.webp\')","title":"Travel","description":"My first application. Layout of the page according to the finished layout in Figma.\\n\\nApplication features:\\n- Carousel\\n- Login popup\\n- Burger menu\\n- Responsive design","repo":"https://github.com/lexarudak/travel_my","deploy":"https://lexarudak.github.io/travel_my","task":"https://github.com/rolling-scopes-school/tasks/blob/master/tasks/travel/travel.md"}]}'),c=class extends s{constructor(){super("Portfolio")}fillContent(){const e=document.createElement("div");return e.classList.add("project-card-list"),r.q.forEach((t=>{e.append(new class{constructor(e){this.projectInfo=e}makeCard(){console.log("done");const e=document.createElement("div");return e.classList.add("project-card"),e.style.backgroundImage=this.projectInfo.photo,e}makeImg(){const e=document.createElement("div");return e.classList.add("project-card__img"),e}makeInfo(){const e=document.createElement("div");return e.classList.add("project-card__info"),e.append(this.makeTitle(),this.makeText(),this.makeLinkList()),e}makeTitle(){const e=document.createElement("h3");return e.classList.add("project-card__title"),e.innerText=this.projectInfo.title,e}makeText(){const e=document.createElement("p");return e.classList.add("project-card__text"),e.innerText=this.projectInfo.description,e}makeLinkList(){const e=this.makeLink("Repo",this.projectInfo.repo),t=this.makeLink("Deploy",this.projectInfo.deploy),o=this.makeLink("Task",this.projectInfo.task),n=document.createElement("div");return n.append(e,t,o),n.classList.add("project-card__link-list"),n}makeLink(e,t){const o=document.createElement("a");return o.classList.add("project-card__link"),o.innerText=e,o.href=t,o.setAttribute("target","_blank"),o}draw(){const e=this.makeCard();return e.append(this.makeImg(),this.makeInfo()),e}}(t).draw())})),e}makeContent(){return this.fillContent()}};(new class{constructor(){this.nav=new class{constructor(){this.cvBtn=this.createNavButton("CV"),this.portfolioBtn=this.createNavButton("Portfolio"),this.contactsBtn=this.createNavButton("Contacts"),this.cvPage=new i,this.portfolioPage=new c,this.contactsPage=new a}createNavButton(e){const t=document.createElement("div");return t.classList.add("nav__button"),t.id=e,t.innerText=e,t.addEventListener("click",(()=>this.swipePage(e))),t.addEventListener("click",(()=>this.changeActiveButton(e))),t}changeActiveButton(e){[this.cvBtn,this.portfolioBtn,this.contactsBtn].forEach((t=>{t.id===e?t.classList.add("nav__button_active"):t.classList.remove("nav__button_active")}))}swipePage(e){switch(e){case"CV":this.cvPage.draw();break;case"Portfolio":this.portfolioPage.draw();break;case"Contacts":this.contactsPage.draw()}}draw(){const e=document.querySelector(".nav");e&&(this.cvBtn.classList.add("nav__button_active"),e.append(this.cvBtn,this.portfolioBtn,this.contactsBtn),this.cvPage.draw())}}}start(){this.nav.draw()}}).start()}()}();