import Canvas from "./canvas.js";

class Command {
    execute() {
        throw "Execute method not implemented!";
    }
}

class CreateCanvasCommand extends Command {
    constructor(args) {
        super();
        this.width = args[0];
        this.height = args[1];
    }

    execute() {
        return new Canvas(this.width, this.height);
    }
}

class DrawLineCommand extends Command {
    constructor(canvas, args) {
        super();
        this.canvas = canvas;
        this.x1 = args[0];
        this.y1 = args[1];
        this.x2 = args[2];
        this.y2 = args[3];
    }

    execute() {
        this.canvas.drawLine(this.x1, this.y1, this.x2, this.y2);
    }
}

class DrawRectangleCommand extends Command {
    constructor(canvas, args) {
        super();
        this.canvas = canvas;
        this.x1 = args[0];
        this.y1 = args[1];
        this.x2 = args[2];
        this.y2 = args[3];
    }

    execute() {
        this.canvas.drawRectangle(this.x1, this.y1, this.x2, this.y2);
    }
}

class BucketFillCommand extends Command {
    constructor(canvas, args) {
        super();
        this.canvas = canvas;
        this.x = args[0];
        this.y = args[1];
        this.color = args[2];
    }

    execute() {
        this.canvas.bucketFill(this.x, this.y, this.color);
    }
}

class QuitCommand extends Command {
    execute() {
        console.log("Exiting the program.");
        process.exit();
    }
}

export {
    CreateCanvasCommand,
    DrawLineCommand,
    DrawRectangleCommand,
    BucketFillCommand,
    QuitCommand,
};
