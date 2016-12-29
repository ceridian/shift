import {Action} from './action';
import {Link} from './link';

export class Element {
    public id: string;
    public type: string;
    public subTypes: Array<string>;
    public label: string;
    public x: number;
    public y: number;
    public w: number;
    public h: number;
    public r: number;
    public blank: boolean;
    public children: Array<Element>;

    constructor(options:{
        id: string,
        type: string,
        subTypes: Array<string>,
        label: string,
        x?: number,
        y?: number,
        w?: number,
        h?: number,
        r?: number,
        blank?: boolean,
        children?: Array<any>
    }){
        this.id = options.id;
        this.type = options.type;
        this.subTypes = options.subTypes;
        this.label = options.label;
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.w = options.w || 100;
        this.h = options.h || 150;
        this.r = options.r || 10;
        this.blank = options.blank || false;
        this.childrenInit(options.children);
    }

    private childrenInit(arr: Array<any>){
        let hold = [];
        for(let i in arr){
            hold.push(new Element(arr[i]));
        }
        this.children = hold;
    }
}

/*export class Element {
    public id: string;
    public type: string;
    public label: string;
    public x: number;
    public y: number;
    public w: number;
    public h: number;
    public actions: Array<Action>;
    public links: Array<Link>;
    public blank: boolean;
    constructor(options:{
        type?: string,
        label?: string,
        id?: string,
        offset?: number,
        x?: number,
        y?: number,
        w?: number,
        h?: number,
        actions?: Array<any>,
        links?: Array<any>,
        blank?: boolean
    }){
        this.type = options.type;
        this.label = options.label;
        this.id = options.id || '';
        this.w = options.w || 100;
        this.h = options.h || 150;
        this.actionsInit(options.actions);
        this.linksInit(options.links);
        this.blank = options.blank || false;
        if(options.offset == undefined){
            if(options.x == undefined){
                console.log('offset and x not defined');
                this.x = 0;
                this.y = 0;
            }else{
                this.x = options.x;
                this.y = options.y;
            }
        }else{
            this.x = options.offset;
            this.y = options.offset;
        }
        
    }

    private actionsInit(arr: Array<any>){
        let hold = [];
        for(let i in arr){
            hold.push(new Action(arr[i]));
        }
        this.actions = hold;
    }

    private linksInit(arr: Array<any>){
        let hold = [];
        for(let i in arr){
            hold.push(new Link(arr[i]));
        }
        this.links = hold;
    }

    public isContainer(): boolean{
        return true;
    }
}*/