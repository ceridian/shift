"use strict";
var Msg = (function () {
    function Msg(options) {
        this.title = options.title;
        this.body = options.body;
        this.id = this.getGuid();
        if (options.type == 'good') {
            this.type = 'good';
        }
        else if (options.type == 'bad') {
            this.type = 'bad';
        }
        else if (options.type == 'warning') {
            this.type = 'warn';
        }
        else if (options.type == 'info') {
            this.type = 'info';
        }
        else {
            this.type = 'bad';
            this.title += ' - type error';
            this.body += '\n - incorrect message type';
        }
    }
    Msg.prototype.getGuid = function () {
        var d = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    return Msg;
}());
exports.Msg = Msg;
//# sourceMappingURL=msg.js.map