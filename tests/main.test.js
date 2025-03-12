import { jest } from "@jest/globals";
import { processInput } from "../src/MAIN.js";

describe("Main.js Test Suite", () => {
    let consoleSpy;

    beforeEach(() => {
        // Mock console.log to capture outputs
        consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Should return an error for invalid command", () => {
        const input = "Z 10 10";
        processInput(input);
        expect(consoleSpy).toHaveBeenCalledWith("Error: Unknown command. Valid commands are:");
    });

    test("Should require a canvas before drawing a line", () => {
        const input = "L 0 0 1 1";
        processInput(input);
        expect(consoleSpy).toHaveBeenCalledWith("Error: You must create a canvas first using the 'C' command.");
    });
});
