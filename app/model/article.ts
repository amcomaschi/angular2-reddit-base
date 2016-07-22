/**
 * Created by ariel on 21/07/16.
 */

export class Article {
    votes:number;
    title:string;
    link:string;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }
}