import { IIndex, IExample } from './index.config'

class Example implements IExample {
    name: string;
    age: number;
    constructor(name: string = '', age: number = 0) {
        this.name = name;
        this.age = age;
    }

    fn(): IIndex {
        console.log('fn function');
        return {
            name: this.name,
            age: this.age,
        }
    }
}

export default Example;
