export class Action{
    public id: string;
    public type: string;
    public typeTotal: number;
    public typeCount: number;
    public label: string;
    public parentX: number;
    public parentY: number;
    public x: number;
    public y: number;
    public r: number;
    public docked: boolean;
    constructor(options:{
        id: string,
        type: string,
        label: string,
        typeTotal: number,
        typeCount: number,
        parentX?: number,
        parentY?: number,
        x?: number,
        y?: number,
        r?: number,
        docked?: boolean
    }){
        this.id = options.id;
        this.type = options.type;
        this.label = options.label;
        this.typeTotal = options.typeTotal;
        this.typeCount = options.typeCount;
        this.parentX = options.parentX;
        this.parentY = options.parentY;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.r = options.r || 10;
        this.docked = options.docked || true;
    }
}