import { createInterface } from "readline";
import Canvas from "./canvas.js";
import CommandFactory from "./commandFactory.js";

// Create a Readline interface to handle user input/output in the terminal
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

let canvas = null;

// Command schema to define required parameters for each command
const commandSchema = {
    C: { params: 2, description: "'C' requires 2 parameters: width and height. Example: C 5 10" },
    L: { params: 4, description: "'L' requires 4 parameters: x1, y1, x2, y2. Example: L 0 0 0 5" },
    R: { params: 4, description: "'R' requires 4 parameters: x1, y1, x2, y2. Example: R 0 0 5 5" },
    B: { params: 3, description: "'B' requires 3 parameters: x, y, and color. Example: B 3 3 z" },
    Q: { params: 0, description: "'Q' does not require any parameters. Example: Q" },
};

function validateNumericParams(params, indices, command, description) {
    for (const index of indices) {
        if (isNaN(params[index])) {
            console.log(`Error: Invalid input. Parameters at positions ${indices.join(", ")} for the '${command}' command must be numbers. Example: ${description}`);
            return false;
        }
    }
    return true;
}

function processInput(input) {
    const args = input.trim().split(/\s+/);
    const command = args[0]?.toUpperCase();
    const params = args.slice(1);

    try {
        // Validate if the command exists
        if (!commandSchema[command]) {
            console.log("Error: Unknown command. Valid commands are:");
            Object.entries(commandSchema).forEach(([cmd, { description }]) => console.log(`  ${description}`));
            return;
        }

        // Validate parameter count
        const { params: requiredParams, description } = commandSchema[command];
        if (params.length < requiredParams) {
            console.log(`Error: ${description}`);
            return;
        }

        // Validate numeric parameters
        if (["C", "L", "R"].includes(command)) {
            // Validate all parameters for these commands
            if (!validateNumericParams(params, Array.from(params.keys()), command, description)) {
                return;
            }
        } else if (command === "B") {
            // Validate only the first two parameters (x, y) for the 'B' command
            if (!validateNumericParams(params, [0, 1], command, description)) {
                return;
            }
        }

        // Check if a canvas is required but not yet created
        if (!canvas && ["L", "R", "B"].includes(command)) {
            console.log("Error: You must create a canvas first using the 'C' command.");
            return;
        }

        // Get and execute the command
        const cmd = CommandFactory.getCommand(command, canvas, params);
        if (!cmd) return;

        const result = cmd.execute();
        if (result instanceof Canvas) {
            canvas = result;
        }

        // Render the canvas after each successful command
        if (canvas) canvas.render();
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

rl.setPrompt("Enter command: ");
rl.prompt();
rl.on("line", (input) => {
    processInput(input);
    rl.prompt();
}).on("close", () => {
    console.log("Program terminated.");
});

// Export the processInput function for testing purposes
export { processInput };
