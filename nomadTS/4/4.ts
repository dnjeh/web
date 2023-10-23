
interface User {
    firstName:string,
    lastName:string,
    sayHi(name:string):string, //추상조차 업음!
    fullName():string
} //이제 안남는다!
/*abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string
    ) {}
    abstract sayHi(name:string):string //추상조차 업음!
    abstract fullName():string
} //추상클래스는 변환시 남아버리므로.. -> 인터페이스로 바꾸자!*/
interface Human {
    health: number;
}
class Player implements User, Human {
    constructor (
        public firstName: string, //근데 프라이빗 못 씀..
        public lastName: string,
        public health: number
    ) {}    
    sayHi(name:string) {
        return `Hello, ${name}. My name is ${this.lastName}`;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    /*sayHi(name:string) {
        return `Hello, ${name}. My name is ${this.lastName}`;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }*/
}

function makeuser(user: User): User { //new 쓸 필요 업다!
    
    return {
        firstName:"nico",
        lastName:"las",
        fullName: () => "xx",
        sayHi: (name)=> "string"
    }
}

makeuser({
    firstName:"nico",
    lastName:"las",
    fullName: () => "xx",
    sayHi: (name)=> "string"
});