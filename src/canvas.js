class Canvas {
    constructor(width, height) {
        // Initialize canvas dimensions and create a grid filled with blank spaces
        this.width = parseInt(width);
        this.height = parseInt(height);
        this.grid = Array(this.height)
            .fill(null)
            .map(() => Array(this.width).fill(" "));
    }

    validateCoordinates(x, y) {
        // Ensure that the given coordinates are within canvas bounds
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    drawLine(x1, y1, x2, y2) {
        if (!this.validateCoordinates(x1, y1) || !this.validateCoordinates(x2, y2)) {
            console.log(`Error: Line endpoints (${x1}, ${y1}) and (${x2}, ${y2}) are out of canvas bounds.`);
            return;
        }

        if (x1 === x2) {
            // Vertical line
            for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
                this.grid[y][x1] = "x";
            }
        } else if (y1 === y2) {
            // Horizontal line
            for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
                this.grid[y1][x] = "x";
            }
        } else {
            console.log("Error: Only horizontal or vertical lines are supported.");
        }
    }

    drawRectangle(x1, y1, x2, y2) {
        // Draw a rectangle by combining four lines
        if (!this.validateCoordinates(x1, y1) || !this.validateCoordinates(x2, y2)) {
            console.log(`Error: Rectangle corners (${x1}, ${y1}) and (${x2}, ${y2}) are out of canvas bounds.`);
            return;
        }
        this.drawLine(x1, y1, x2, y1);
        this.drawLine(x1, y2, x2, y2);
        this.drawLine(x1, y1, x1, y2);
        this.drawLine(x2, y1, x2, y2);
    }

    bucketFill(x, y, color) {
        // Fill a region connected to the given coordinates with the specified color
        x = parseInt(x);
        y = parseInt(y);
        if (!this.validateCoordinates(x, y)) {
            console.log(`Error: Starting point (${x}, ${y}) is out of canvas bounds.`);
            return;
        }

        const targetColor = this.grid[y][x];
        if (targetColor === color || targetColor === "x") return;

        const fill = (x, y) => {
            if (!this.validateCoordinates(x, y) || this.grid[y][x] !== targetColor) return;

            this.grid[y][x] = color;
            fill(x + 1, y);
            fill(x - 1, y);
            fill(x, y + 1);
            fill(x, y - 1);
        };

        fill(x, y);
    }

    render() {
        const border = "-".repeat(this.width + 2);
        console.log(border);
        for (const row of this.grid) {
            console.log("|" + row.join("") + "|");
        }
        console.log(border);
    }
}

export default Canvas;
