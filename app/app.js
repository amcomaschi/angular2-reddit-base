System.register(["@angular/platform-browser-dynamic", "@angular/core", 'app/component/article.component', 'app/model/article'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1, article_component_1, article_1;
    var RedditApp;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            RedditApp = (function () {
                function RedditApp() {
                    this.articles = [
                        new article_1.Article('Angular 2', 'http://angular.io', 3),
                        new article_1.Article('Fullstack', 'http://fullstack.io', 2),
                        new article_1.Article('Angular Homepage', 'http://angular.io', 1),
                    ];
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                    //this.articles.push(new Article(${title.value}, ${link.value}));
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        template: "\n               <form class=\"ui large form segment\">\n                    <h3 class=\"ui header\">Add a Link</h3>\n                    <div class=\"field\">\n                        <label for=\"title\">Title:</label>\n                        <input name=\"title\" #newtitle>\n                    </div>\n                    <div class=\"field\">\n                        <label for=\"link\">Link:</label>\n                        <input name=\"link\" #newlink>\n                    </div>\n                    <button (click)=\"addArticle(newtitle, newlink)\" class=\"ui positive right floated button\">Submit</button>\n                </form>\n                \n                <div class=\"ui grid posts\">\n                    <reddit-article\n                    *ngFor=\"let article of articles\"\n                    [article]=\"article\">\n                    </reddit-article>\n                </div>\n                ",
                        directives: [article_component_1.ArticleComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            }());
            platform_browser_dynamic_1.bootstrap(RedditApp);
        }
    }
});
//# sourceMappingURL=app.js.map