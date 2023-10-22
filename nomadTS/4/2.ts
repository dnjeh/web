type Words = {
    [key:string]: string;
}

class Dict {
    private words:Words
    constructor() {
        this.words = {}
    }
    add(word:Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    update(word:Word) {
        if(this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
    remove(term:string) {
        delete this.words[term];
    }
    def(term:string) {
        return this.words[term];
    }
}

class Word {
    constructor(
        public term:string,
        public def: string
    ) {}
    //단어의 정의를 추가하다가 무엇일가
}

const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi")