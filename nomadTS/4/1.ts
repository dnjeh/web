abstract class User { //추상도 타입 전용이야..
    constructor (
        protected firstName:string, 
        protected lastName:string, //private은 타입스크립트 전용
        protected nickname:string //전용
    ) {}
    abstract getNickName():void
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User {
    getNickName(): void {
        console.log(this.nickname);
    }
}

const nico = new Player("nico", "last", "니꼬");
