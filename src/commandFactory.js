import {CreateCanvasCommand, 
    DrawLineCommand, 
    DrawRectangleCommand, 
    BucketFillCommand, 
    QuitCommand} from "./commands.js";


class CommandFactory {
    static getCommand(command, canvas, args) {
        // Factory method to return the correct command object based on the input
        switch (command) {
            case "C":
                return new CreateCanvasCommand(args); // Command to create a canvas
            case "L":
                return new DrawLineCommand(canvas, args); // Command to draw a line
            case "R":
                return new DrawRectangleCommand(canvas, args); // Command to draw a rectangle
            case "B":
                return new BucketFillCommand(canvas, args); // Command to fill a region
            case "Q":
                return new QuitCommand(); // Command to exit the program
            default:
                console.log("Error: Unknown command.");
                return null;
        }
    }
}

export default CommandFactory;
    
