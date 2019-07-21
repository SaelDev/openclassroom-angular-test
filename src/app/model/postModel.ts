
export class PostModel {
    title : string;
    content : string;
    loveCount : number;
    dontLoveCount : number;
    date : Date = new Date();

    constructor(title : string, content : string, loveSetupScore : number){
        this.title = title;
        this.content = content;
        if(loveSetupScore >= 0) {
            this.loveCount = loveSetupScore;
            this.dontLoveCount = 0;
        }
        else {
            this.loveCount = 0;
            this.dontLoveCount = -loveSetupScore;
        }
    }

    getLoveScore() : number {
        return this.loveCount - this.dontLoveCount;
    }

}