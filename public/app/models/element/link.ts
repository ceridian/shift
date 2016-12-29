export class Link{
    public id: string;
    public dest: string; // id of dest element // x1, y1
    public targ: string; // id of targ element // x2, y2
    public type: string;
    public x1: number;
    public y1: number;
    public x2: number;
    public y2: number;
    constructor(options:{
        id: string,
        dest: string,
        targ: string,
        type: string,
        x1: number,
        y1: number,
        x2: number,
        y2: number
    }){
        this.id = options.id;
        this.dest = options.dest;
        this.targ = options.targ;
        this.type = options.type;
        this.x1 = options.x1;
        this.y1 = options.y1;
        this.x2 = options.x2;
        this.y2 = options.y2;
    }
}