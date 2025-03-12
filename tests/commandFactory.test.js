import CommandFactory from "../src/commandFactory.js";
import Canvas from "../src/canvas.js";

describe("CommandFactory", () => {
    let canvas = null;

    beforeEach(() => {
        canvas = new Canvas(5, 5);
    });

    test("should create a CreateCanvasCommand", () => {
        const command = CommandFactory.getCommand("C", null, [5, 5]);
        expect(command).not.toBeNull();
    });

    test("should create a DrawLineCommand", () => {
        const command = CommandFactory.getCommand("L", canvas, [0, 1, 4, 1]);
        expect(command).not.toBeNull();
    });

    test("should create a BucketFillCommand", () => {
        const command = CommandFactory.getCommand("B", canvas, [2, 2, "o"]);
        expect(command).not.toBeNull();
    });

    test("should return null for unknown commands", () => {
        const command = CommandFactory.getCommand("X", canvas, []);
        expect(command).toBeNull();
    });
});
