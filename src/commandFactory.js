import {CreateCanvasCommand, 
    DrawLineCommand, 
    DrawRectangleCommand, 
    BucketFillCommand, 
    QuitCommand} from "./commands.js";


class CommandFactory {
    static getCommand(command, canvas, args) {
        switch (command) {
            case "C":
                return new CreateCanvasCommand(args);
            case "L":
                return new DrawLineCommand(canvas, args);
            case "R":
                return new DrawRectangleCommand(canvas, args);
            case "B":
                return new BucketFillCommand(canvas, args);
            case "Q":
                return new QuitCommand();
            default:
                console.log("Error: Unknown command.");
                return null;
        }
    }
}

export default CommandFactory;
