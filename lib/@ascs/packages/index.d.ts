import { IIndex, IExample } from './index.config';
declare class Example implements IExample {
    name: string;
    age: number;
    constructor(name?: string, age?: number);
    fn(): IIndex;
}
export default Example;
