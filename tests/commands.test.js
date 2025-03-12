import {
    CreateCanvasCommand,
    DrawLineCommand,
    DrawRectangleCommand,
    BucketFillCommand,
} from "../src/commands.js";
import Canvas from "../src/canvas.js";

describe("Commands", () => {
    test("CreateCanvasCommand should create a canvas", () => {
        const command = new CreateCanvasCommand([5, 5]);
        const canvas = command.execute();
        expect(canvas).toBeInstanceOf(Canvas);
        expect(canvas.grid.length).toBe(5);
    });

    test("DrawLineCommand should draw a line on the canvas", () => {
        const canvas = new Canvas(5, 5);
        const command = new DrawLineCommand(canvas, [0, 1, 4, 1]);
        command.execute();
        expect(canvas.grid[1].join("")).toBe("xxxxx");
    });

    test("DrawRectangleCommand should draw a rectangle", () => {
        const canvas = new Canvas(5, 5);
        const command = new DrawRectangleCommand(canvas, [1, 1, 3, 3]);
        command.execute();
        expect(canvas.grid[1][1]).toBe("x");
        expect(canvas.grid[3][3]).toBe("x");
    });

    test("BucketFillCommand should fill the area with a color", () => {
        const canvas = new Canvas(5, 5);
        const command = new BucketFillCommand(canvas, [2, 2, "o"]);
        command.execute();
        expect(canvas.grid[2][2]).toBe("o");
    });
});
