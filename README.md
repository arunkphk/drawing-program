# drawing-program
Terminal based drawing program using Node JS

This project is a terminal based application that allows users to create and manipulate a 2D canvas. Users can draw lines, rectangles, and perform bucket fills using text-based commands

# How to Run

Ensure you have Node.js installed on your system.

1. Clone the repository:

   git clone https://github.com/arunkphk/drawing-program.git
   
   cd drawing-program

3. Install dependencies
   
   npm install

5. Run the program:
   
   npm start
   (Alternatively, you can use: node src/main.js)

# Commands

   C w h	  ->      Creates a new canvas with width w and height h.

   L x1 y1 x2 y2	-> Draws a horizontal or vertical line from (x1, y1) to (x2, y2).

   R x1 y1 x2 y2	-> Draws a rectangle with the top-left corner at (x1, y1) and bottom-right corner at (x2, y2).

   B x y c	     ->  Fills the area connected to point (x, y) with color c.

   Q	          ->  Quits the program.


# Technology

Language: JavaScript (ES6)

Modules: Node.js

Patterns: Command Factory Pattern, Object-Oriented Programming (OOP)

