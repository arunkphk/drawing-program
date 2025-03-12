import Canvas from "../src/canvas.js";

describe("Canvas", () => {
    test("should initialize a blank canvas with the given width and height", () => {
        const canvas = new Canvas(5, 5);
        expect(canvas.grid.length).toBe(5);
        expect(canvas.grid[0].length).toBe(5);
        expect(canvas.grid[0][0]).toBe(" ");
    });

    test("should draw a horizontal line", () => {
        const canvas = new Canvas(5, 5);
        canvas.drawLine(0, 1, 4, 1);
        expect(canvas.grid[1].join("")).toBe("xxxxx");
    });

    test("should draw a vertical line", () => {
        const canvas = new Canvas(5, 5);
        canvas.drawLine(2, 0, 2, 4);
        expect(canvas.grid.map(row => row[2]).join("")).toBe("xxxxx");
    });

    test("should draw a rectangle", () => {
        const canvas = new Canvas(5, 5);
        canvas.drawRectangle(1, 1, 3, 3);
        expect(canvas.grid[1][1]).toBe("x");
        expect(canvas.grid[3][3]).toBe("x");
    });

    test("should fill a bucket area with the given color", () => {
        const canvas = new Canvas(5, 5);
        canvas.bucketFill(2, 2, "o");
        expect(canvas.grid[2][2]).toBe("o");
    });

    test("should validate coordinates and ignore out-of-bound lines", () => {
        const canvas = new Canvas(5, 5);
        canvas.drawLine(-1, 0, 6, 0);
        expect(canvas.grid[0].join("")).toBe("     ");
    });
});
