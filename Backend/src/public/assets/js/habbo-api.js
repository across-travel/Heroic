!function e(r,t,n){function s(o,i){if(!t[o]){if(!r[o]){var l="function"==typeof require&&require;if(!i&&l)return l(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[o]={exports:{}};r[o][0].call(c.exports,function(e){var t=r[o][1][e];return s(t||e)},c,c.exports,e,r,t,n)}return t[o].exports}for(var a="function"==typeof require&&require,o=0;o<n.length;o++)s(n[o]);return s}({1:[function(e,r,t){"use strict";var n=a(e("./config/config")),s=a(e("./config/run"));function a(e){return e&&e.__esModule?e:{default:e}}e("./components"),e("./controllers"),e("./services"),e("./config/template-cache");window.app=angular.module("heroic",["ngAria","ngStorage","ui.router","app.templates","heroic.components","heroic.controllers","heroic.services"]),angular.module("heroic").config(n.default),angular.module("heroic").run(s.default),angular.bootstrap(document,["heroic"],{strictDi:!0})},{"./components":10,"./config/config":11,"./config/run":13,"./config/template-cache":15,"./controllers":23,"./services":24}],2:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(r,t){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r.articles=[],t.get("/api/news/articles").then(function(e){r.articles=e.data,console.log(e.data)}).catch(function(e){})};n.$inject=["$scope","$http"];var s={controller:n,templateUrl:"views/components/articles.html"};t.default=s},{}],3:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={templateUrl:"views/components/footer.html"}},{}],4:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={templateUrl:"views/components/header-large.html"}},{}],5:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={templateUrl:"views/components/header-small.html"}},{}],6:[function(e,r,t){"use strict";t.Header={Large:e("./header-large").default,Small:e("./header-small").default,User:e("./user-menu").default},t.Navigation=e("./navigation").default,t.Tabs=e("./tabs").default,t.Articles=e("./articles").default,t.Footer=e("./footer").default},{"./articles":2,"./footer":3,"./header-large":4,"./header-small":5,"./navigation":7,"./tabs":8,"./user-menu":9}],7:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=e("../../config/navigation.json"),a=(n=s)&&n.__esModule?n:{default:n};var o=function e(r,t,n){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r.parents=[],angular.forEach(a.default.navigation,function(e,t){"current_username"==e.name&&(e.name=n.session.username),r.parents.push({name:e.name,icon:e.icon,state:e.state,url:e.url})})};o.$inject=["$scope","$rootScope","$localStorage"];var i={controller:o,templateUrl:"views/components/navigation.html"};t.default=i},{"../../config/navigation.json":12}],8:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=e("../../config/navigation.json"),a=(n=s)&&n.__esModule?n:{default:n};var o=function e(r,t,n){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r.children=[],angular.forEach(a.default.navigation,function(e,n){t.page.name.indexOf(e.state)>-1&&angular.forEach(e.children,function(e,t){r.children.push(e)})})};o.$inject=["$scope","$rootScope","$localStorage"];var i={controller:o,templateUrl:"views/components/tabs.html"};t.default=i},{"../../config/navigation.json":12}],9:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(r){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r.status=!1,r.toggle=function(){r.status=!r.status}};n.$inject=["$scope"];var s={controller:n,templateUrl:"views/components/user-menu.html"};t.default=s},{}],10:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=e("./frontend/index"),a=(n=s)&&n.__esModule?n:{default:n};var o=angular.module("heroic.components",[]);o.component("habboHeaderLarge",a.default.Header.Large),o.component("habboHeaderSmall",a.default.Header.Small),o.component("habboNavigation",a.default.Navigation),o.component("habboUserMenu",a.default.Header.User),o.component("habboTabs",a.default.Tabs),o.component("articleList",a.default.Articles),o.component("habboFooter",a.default.Footer),t.default=o},{"./frontend/index":6}],11:[function(e,r,t){"use strict";o.$inject=["$locationProvider","$urlRouterProvider","$stateProvider","$httpProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n,s=e("./states.json"),a=(n=s)&&n.__esModule?n:{default:n};function o(e,r,t,n){"ngInject";e.html5Mode(!0),e.hashPrefix(""),r.otherwise("/"),null==a.default&&0==a.default.length||angular.forEach(a.default,function(e,r){t.state(e.name,e)}),n.interceptors.push("JWTService"),n.interceptors.push("PromiseService")}},{"./states.json":14}],12:[function(e,r,t){r.exports={navigation:[{name:"current_username",icon:"home",state:"user.home",url:"user.home.me",children:[{name:"Home",state:"user.home.me"},{name:"Messages",state:"user.home.messages"}]},{name:"Community",icon:"users",state:"user.community",url:"user.community.photos",subItems:[{name:"Photos",state:"user.community.photos"}]}]}},{}],13:[function(e,r,t){"use strict";function n(e,r,t,n,s){"ngInject";e.onStart({},function(e){t.validate(),n.page=e.to()}),e.onStart({entering:"guest"},function(e){if(t.status())return e.router.stateService.target("user.home.me")}),e.onStart({entering:"user"},function(e){if(!t.status())return e.router.stateService.target("guest.login")}),e.onStart({entering:"admin"},function(e){if("staff"!=s.session.rank.display)return e.router.stateService.target("user.dashboard")})}n.$inject=["$transitions","SettingsService","SessionService","$rootScope","$localStorage"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},{}],14:[function(e,r,t){r.exports={errors:{name:"errors",abstract:!0,templateUrl:"views/frontend/errors/index.html"},"errors.500":{name:"errors.500",title:"Server Error",templateUrl:"views/frontend/errors/500.html"},guest:{name:"guest",abstract:!0,templateUrl:"views/frontend/guest/index.html"},"guest.login":{name:"guest.login",url:"/",title:"Login",controller:"Frontend.Guest.Login",templateUrl:"views/frontend/guest/login.html"},"guest.register":{name:"guest.register",url:"/register",title:"Register",controller:"Frontend.Guest.Register",templateUrl:"views/frontend/guest/register.html"},user:{name:"user",abstract:!0,templateUrl:"views/frontend/user/index.html"},"user.logout":{name:"user.logout",controller:"Frontend.User.Logout"},"user.home":{name:"user.home",abstract:!0,template:"<div ui-view></div>"},"user.home.me":{name:"user.home.me",url:"/me",title:"Me",templateUrl:"views/frontend/user/home/me.html"},"user.home.messages":{name:"user.home.messages",url:"/messages",title:"My Messages",templateUrl:"views/frontend/user/home/messages.html"},"user.community":{name:"user.community",url:"/community",abstract:!0,template:"<div ui-view></div>"},"user.community.photos":{name:"user.community.photos",url:"/photos",title:"Photos",templateUrl:"views/frontend/user/community/photos.html"}}},{}],15:[function(e,r,t){"use strict";angular.module("app.templates",[]).run(["$templateCache",function(e){e.put("views/components/articles.html",'<h1>Latest news</h1>\r\n<div class="main main--fixed">\r\n  <section>\r\n    <article class="news-header news-header--column" ng-repeat="article in articles">\r\n      <a class="news-header__link news-header__banner">\r\n        <figure class="news-header__viewport">\r\n          <img ng-src="https://images.habbo.com/web_images/habbo-web-articles/lpromo_habbobitesjapanfeb18.png"class="news-header__image news-header__image--featured">\r\n          <img ng-src="https://images.habbo.com/web_images/habbo-web-articles/lpromo_habbobitesjapanfeb18_thumb.png" class="news-header__image news-header__image--thumbnail">\r\n        </figure>\r\n      </a>\r\n      <a class="news-header__link news-header__wrapper">\r\n        <h2 class="news-header__title" ng-bind="article.title"></h2>\r\n      </a>\r\n      <aside class="news-header__wrapper news-header__info">\r\n        <time class="news-header__date" ng-bind="article.timestamp | date : \'longDate\'"></time>\r\n        <ul class="news-header__categories">\r\n          <li class="news-header__category">\r\n            <a class="news-header__category__link" ng-bind="article.category.title"></a>\r\n          </li>\r\n        </ul>\r\n      </aside>\r\n      <p class="news-header__wrapper news-header__summary" ng-bind="article.description"></p>\r\n    </article>\r\n  </section>\r\n</div>\r\n'),e.put("views/components/footer.html",'<footer class="wrapper">\r\n    <div class="footer__content">\r\n      <p class="footer__media__label"> Heroic Two</p>\r\n      <p class="footer__copyright"> Powered by Heroic Two by LeChris <br> Built with Node and Angular <br></p>\r\n      <div id="footer_logo"></div>\r\n    </div>\r\n</footer>\r\n'),e.put("views/components/header-large.html",'<div class="header__content">\r\n\t<div class="register-banner__hotel"></div>\r\n\t<div class="register-banner__wrapper">\r\n\t\t<div class="register-banner__register">\r\n\t\t\t<h2 class="register-banner__title">Make friends and join {{ $root.website.online }} users currently online</h2>\r\n\t\t\t<a ui-sref="guest.register" class="register-banner__button">Join for free!</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<header class="header__wrapper wrapper">\r\n\t<a class="header__habbo__logo">\r\n\t<h1 class="header__habbo__name" id="ga-linkid-habbo-large">Habbo</h1></a>\r\n</header>\r\n'),e.put("views/components/header-small.html",'<header class="header__wrapper wrapper">\r\n\t<a class="header__habbo__logo">\r\n\t<h1 class="header__habbo__name" id="ga-linkid-habbo">Habbo</h1></a>\r\n\t<div class="header__aside" ng-show="!$root.session">\r\n\t\t<a ui-sref="guest.login">\r\n      <button class="header__login__button"><span class="header__login__icon">Login</span></button>\r\n    </a>\r\n\t</div>\r\n\t<habbo-user-menu class="header__aside header__aside--user-menu" ng-if="$root.session"></habbo-user-menu>\r\n</header>\r\n'),e.put("views/components/navigation.html",'<nav class="navigation">\r\n  <ul class="navigation__menu">\r\n    <li ng-repeat="item in parents" class="navigation__item">\r\n      <a ui-sref="item.url" class="navigation__link" style="color:#036;">\r\n        <i class="fa fa-{{ item.icon }}"></i> {{ item.name}}\r\n      </a>\r\n    </li>\r\n    <li class="navigation__item navigation__item--aside navigation__item--hotel">\r\n      <a ui-sref="client" class="hotel-button" id="ga-linkid-hotel"><span class="hotel-button__text" style="overflow:auto;">Enter Hotel <small style="font-size:10px;overflow:auto;"> {{ $root.website.online }} users online</small></span> </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n'),e.put("views/components/tabs.html",'<nav class="tabs">\r\n  <ul class="tabs__menu">\r\n    <habbo-tab class="sub-list no-padding" ng-repeat="child in children">\r\n      <li class="tab">\r\n        <a ui-sref="child.url" class="tab__link" ng-class="{\'tab__link--active\': $root.page.name==child.state}">\r\n          {{ child.name }}\r\n        </a>\r\n      </li>\r\n    </habbo-tab>\r\n  </ul>\r\n</nav>\r\n'),e.put("views/components/user-menu.html",'<div class="user-menu">\r\n\t<div class="user-menu__header">\r\n\t\t<a ng-click="toggle()" class="user-menu__toggle">\r\n  \t\t<div class="user-menu__name__wrapper">\r\n  \t\t\t<div class="user-menu__name" ng-class="{ \'user-menu__name--open\': status }">\r\n  \t\t\t\t{{ $root.session.username }}\r\n  \t\t\t</div>\r\n  \t\t</div>\r\n      <habbo-imager class="user-menu__avatar">\r\n        <img width="54" height="62" class="imager" src="https://avatar-retro.com/habbo-imaging/avatarimage?figure={{ $root.session.look }}&headonly=1">\r\n      </habbo-imager>\r\n    </a>\r\n\t</div>\r\n\t<ul class="user-menu__list" ng-show="status">\r\n\t\t<li class="user-menu__item">\r\n\t\t\t<a ui-sref="user.logout" class="user-menu__link">Logout</a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n'),e.put("views/frontend/errors/500.html",'<main class="wrapper wrapper--content" style="">\r\n\t<header class="shop__header">\r\n\t\t<h1 class="shop__header__title shop__header__title--single">Emergency Maintenance</h1>\r\n\t</header>\r\n\t<section>\r\n    <span>An error has occured and our staff team is doing their best to resolve the issue.  Please try again later.</span>\r\n    <iframe width="560" height="315" src="https://www.youtube.com/embed/Xk_J3OT3EuQ?start=20&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\r\n  </section>\r\n</main>\r\n'),e.put("views/frontend/errors/index.html",'<habbo-header-small></habbo-header-small>\r\n<nav class="navigation">\r\n\t<ul class="navigation__menu">\r\n\t</ul>\r\n</nav>\r\n<main class="app content" ui-view></main>\r\n<habbo-footer></habbo-footer>\r\n\r\n \r\n'),e.put("views/frontend/guest/index.html",'<habbo-header-large ng-show="page.name==\'guest.login\'"></habbo-header-large>\n<habbo-header-small ng-show="page.name==\'guest.register\'"></habbo-header-small>\n<nav class="navigation">\n\t<ul class="navigation__menu">\n\t</ul>\n</nav>\n<main class="app content" ui-view></main>\n<habbo-footer></habbo-footer>\n'),e.put("views/frontend/guest/login.html",'<div class="wrapper wrapper--content">\n  <form ng-submit="login()" class="form" style="width:40%;">\n    <fieldset class="form__fieldset form__fieldset--box">\n      <div class="form__field">\n        <label class="form__label">Username</label>\n        <input ng-model="user.username" ng-class="{\'ng-invalid\': error.username}"  class="form__input">\n      </div>\n      <label class="form__label">Password</label>\n      <div class="form__field">\n        <input ng-model="user.password" ng-class="{\'ng-invalid\': error.password}" type="password" class="form__input">\n        <i class="password-toggle-mask__icon"></i>\n      </div>\n    </fieldset>\n    <div class="form__footer">\n      <button class="form__submit" type="submit">Login</button>\n    </div>\n  </form>\n</div>\n'),e.put("views/frontend/guest/register.html",'<div class="wrapper wrapper--content">\n  <habbo-registration-form>\n    <p ng-bind="error.master"></p>\n    <form ng-submit="join()" class="form" style="width:40%;">\n      <fieldset class="form__fieldset">\n        <label class="form__label">Username</label>\n        <div class="form__field">\n          <input ng-model="user.username" ng-change="check(\'username\')" ng-class="{\'ng-invalid\' : errors.username}" class="form__input">\n          <div class="form__popover form__popover--error" ng-show="errors.username" ng-bind="errors.username"></div>\n        </div>\n      </fieldset>\n      <fieldset class="form__fieldset">\n        <label class="form__label">Email</label>\n        <p>You\'ll need to use this email address to login in the future. Please use a valid address</p>\n        <div class="form__field">\n          <input ng-model="user.email" ng-change="check(\'email\')" ng-class="{\'ng-invalid\' : errors.email}" class="form__input">\n          <div class="form__popover form__popover--error" ng-show="errors.email" ng-bind="errors.email"></div>\n        </div>\n      </fieldset>\n      <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">\n        <label class="form__label">Password</label>\n        <p>Use at least 6 characters. Include at least one letter and at least one number or special character.</p>\n        <div class="form__field">\n          <input ng-model="user.password" ng-change="check(\'password\')" ng-class="{\'ng-invalid\' : errors.password}" type="password" class="form__input">\n          <i class="password-toggle-mask__icon"></i>\n          <div class="form__popover form__popover--error" ng-show="errors.password" ng-bind="errors.password"></div>\n        </div>\n      </fieldset>\n      <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-bottom">\n        <label class="form__label">Repeat Password</label>\n        <div class="form__field">\n          <input ng-model="user.password_repeat" ng-change="check(\'password_repeat\')" ng-class="{\'ng-invalid\' : errors.password_repeat} "type="password" class="form__input">\n          <i class="password-toggle-mask__icon"></i>\n          <div class="form__popover form__popover--error" ng-show="errors.password_repeat" ng-bind="errors.password_repeat"></div>\n        </div>\n      </fieldset>\n      <div class="form__footer">\n        <button ng-disabled="!errors" class="form__submit" type="submit">Finish</button>\n      </div>\n    </form>\n  </habbo-registration-form>\n</div>\n'),e.put("views/frontend/user/index.html",'<habbo-header-small></habbo-header-small>\r\n<habbo-navigation></habbo-navigation>\r\n<habbo-tabs></habbo-tabs>\r\n<main class="app content" ui-view></main>\r\n<habbo-footer></habbo-footer>\r\n'),e.put("views/frontend/user/home/me.html",'<div class="wrapper wrapper--content">\r\n  <article-list></article-list>\r\n</div>\r\n')}])},{}],16:[function(e,r,t){"use strict"},{}],17:[function(e,r,t){"use strict";t.Login=e("./login").default,t.Register=e("./register").default},{"./login":18,"./register":19}],18:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(r,t,n,s){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),s.error=!1,s.user={username:"",password:""},s.login=function(){""==s.user.username&&""==s.user.password?s.error={username:!0,password:!0}:""==s.user.username?s.error={username:!0}:""==s.user.password?s.error={password:!0}:(s.error=!1,s.push())},s.push=function(){t.post("/api/users/session/"+s.user,s.user).then(function(e){if(e.data.error)switch(e.data.error){case"That user does not exist":s.error={username:!0};break;case"That's not the right password":s.error={password:!0};break;default:s.error=!1}else r.create(e.data,s.user.username).then(function(e){n.go("user.home.me")}).catch(function(e){n.go("errors.500")})}).catch(function(e){n.go("errors.500")})}};n.$inject=["SessionService","$http","$state","$scope"],t.default=n},{}],19:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(r,t,n,s){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),s.user={},s.errors={},s.check=function(e){switch(e){case"username":t.post("/api/users/validate",{data:s.user.username,type:"username"}).then(function(e){e.data.error?s.errors.username=e.data.error:s.errors.username=void 0});break;case"email":t.post("/api/users/validate",{data:s.user.email,type:"email"}).then(function(e){e.data.error?s.errors.email=e.data.error:s.errors.email=void 0});break;case"password":s.user.password!=s.user.password_repeat?s.errors.password_repeat="Your passwords must match":s.errors.password_repeat=!1,t.post("/api/users/validate",{data:s.user.password,type:"password"}).then(function(e){e.data.error?s.errors.password=e.data.error:s.errors.password=void 0});break;case"password_repeat":s.user.password!=s.user.password_repeat?s.errors.password_repeat="Your passwords must match":s.errors.password_repeat=void 0}},s.join=function(){t.put("/api/users/user/"+s.user.username,s.user).then(function(e){e.data.error?s.errors.master=e.data.error:t.post("/api/users/session/"+s.user.username,s.user).then(function(e){r.create(e.data)}).catch(function(e){n.go("errors.500")})}).catch(function(e){n.go("errors.500")})}};n.$inject=["SessionService","$http","$state","$scope"],t.default=n},{}],20:[function(e,r,t){"use strict";t.General=e("./general/index"),t.Guest=e("./guest/index"),t.User=e("./user/index")},{"./general/index":16,"./guest/index":17,"./user/index":21}],21:[function(e,r,t){"use strict";t.Logout=e("./logout").default},{"./logout":22}],22:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(r){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.$onInit=function(){r.delete()}};n.$inject=["SessionService"],t.default=n},{}],23:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=e("./frontend/index"),a=(n=s)&&n.__esModule?n:{default:n};var o=angular.module("heroic.controllers",[]);o.controller("Frontend.Guest.Login",a.default.Guest.Login),o.controller("Frontend.Guest.Register",a.default.Guest.Register),o.controller("Frontend.User.Logout",a.default.User.Logout),t.default=o},{"./frontend/index":20}],24:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(e("./user/jwt")),s=i(e("./promise")),a=i(e("./settings")),o=i(e("./user/session"));function i(e){return e&&e.__esModule?e:{default:e}}var l=angular.module("heroic.services",[]);l.service("JWTService",n.default),l.service("SessionService",o.default),l.service("PromiseService",s.default),l.service("SettingsService",a.default),t.default=l},{"./promise":25,"./settings":26,"./user/jwt":27,"./user/session":28}],25:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(r){"ngInject";return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),{requestError:function(e){},responseError:function(e){return canRecover(e)?responseOrNewPromise:r.reject(e)}}};n.$inject=["$q"],t.default=n},{}],26:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(r,t,n,s){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r.get("/api/config/website").then(function(e){t.website=e.data,n.website=e.data}).catch(function(e){return null});var a=function(){r.get("/api/users/online/count").then(function(e){t.website.online=e.data}).catch(function(e){return null})};a(),s(a,2500)};n.$inject=["$http","$rootScope","$localStorage","$interval"],t.default=n},{}],27:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function e(r,t,n,s){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.request=function(e){return e.headers=e.headers||{},s.token&&(e.headers["x-access-token"]=s.token),e},this.requestError=function(e){return n.reject(e)},this.response=function(e){return e||n.when(e)},this.responseError=function(e){return n.reject(e)}};n.$inject=["$injector","$location","$q","$localStorage"],t.default=n},{}],28:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();var s=function(){function e(r,t,n,s,a,o){"ngInject";!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),e.$http=t,e.$localStorage=n,e.$rootScope=s,e.$q=a,e.$state=o}return e.$inject=["JWTService","$http","$localStorage","$rootScope","$q","$state"],n(e,[{key:"create",value:function(r,t){return e.$q(function(n,s){e.$localStorage.token=r,e.$http.get("/api/auth/users/session/"+t).then(function(r){e.$localStorage.session=r.data,e.$rootScope.session=r.data,n()}).catch(function(r){return e.$localStorage.$reset(),e.$rootScope.session=void 0,!1})})}},{key:"validate",value:function(){e.$localStorage.session&&e.$http.get("/api/auth/users/session/"+e.$localStorage.session.username).then(function(r){if(!r.data.error)return e.$localStorage.session=r.data,e.$rootScope.session=r.data,!0;e.delete(),reject()}).catch(function(r){return e.$localStorage.$reset(),e.$rootScope.session=void 0,!1})}},{key:"delete",value:function(){e.$localStorage.$reset(),e.$rootScope.session=void 0,e.$state.go("guest.login")}},{key:"status",value:function(){return!!e.$localStorage.session}}]),e}();t.default=s},{}]},{},[1]);