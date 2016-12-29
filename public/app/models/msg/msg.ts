export class Msg {
    public title: string;
    public body: string;
    public type: string;
    public id: string;
    constructor(options:{
        title: string,
        body: string,
        type: string
    }){

        this.title = options.title;
        this.body = options.body;
        this.id = this.getGuid();
        if(options.type == 'good'){
            this.type = 'good';
        }else if(options.type == 'bad'){
            this.type = 'bad';
        }else if(options.type == 'warning'){
            this.type = 'warn';
        }else if(options.type == 'info'){
            this.type = 'info';
        }else{
            this.type = 'bad';
            this.title += ' - type error';
            this.body += '\n - incorrect message type'
        }
    }

    private getGuid(): string{
        let d = new Date().getTime();
        
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = (d + Math.random() * 16) % 16 | 0;
            return (c=='x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}