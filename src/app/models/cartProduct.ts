import { Watch } from "./Watch";

export class CartProduct {
    static gen : number = 1
    id : number
    watch:Watch;
    count:number;
    constructor(watch: Watch) {
        this.id = Watch.gen++
        this.watch = watch;
        this.count=1;
    }
}