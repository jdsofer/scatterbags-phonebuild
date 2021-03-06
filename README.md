# Scatter Bag

Scatter Bag is a simple and fun HTML5 game. The goal of the game is to get each falling, colored briefcase into the cart that matches its color.

**NOTE: The framework we used appears to have some bugs in Google Chrome. We recommend playing on Firefox, Safari, or Edge (not Internet Explorer).**

## Controls

The player controls the three ledges in the middle of the screen.

- Desktop: Left and right arrow keys
- Mobile: Touch and hold the left or right half of the screen

## Research

Going into this project, our group knew very little about game development and even less about game development with HTML5. After several hours of comparing different HTML5 game engines, we eventually decided to use [Phaser](http://www.phaser.io) as the backbone of our game. From the official website, Phaser is:

> A fast, free and fun open source framework
> for Canvas and WebGL powered browser games

## First Milestone Completed Tasks

- Created the initial environment, including the "preload", "create", and "update" functions: 1 hour.
- Added assets (background image, briefcase, ledge) to the "preload" function and instantiated these objects in the "create" function: 2 hours.
- Used ARCADE physics engine to render collisions between briefcases and ledges: 4 hours.
- ARCADE physics engine turned out to be too limited for what we needed (angled collisions), so rewrote the game using the P2 physics engine: 5-7 hours.
- Wrote code to get keyboard input, i.e., the left and right arrows to rotate the ledges: 1-2 hours.
- Wrote function to generate new briefcase objects at a fixed interval: 2 hours.
- Added logic to remove falling objects from the game once they hit the ground: 1-2 hours.
- Completed various other tasks, such as cleaning up the code, connecting modules, and modifying sprite images: 3-4 hours.
- Debugging: 8-10 hours.

## Work Done Since First Milestone

- Made each falling briefcase be one of four different colors: 1-2 hours.
- Added four different colored carts to "catch" the falling objects: 1-2 hours.
- Added score mechanism for briefcases that fall into the right cart: 1 hour.
- Rewrote the game to support state transitions ("Main Menu Screen", "Game Screen", "Game Over Screen", "High Scores List"): 8 hours.
- Added mobile/touch support: 1 hour.
- PhoneGapped the application and added logic to support different screen sizes: 6 hours.
- Server-side development (posting and getting scores): 10 hours.
- Debugging: 10+ hours.

## Future Improvements

- Add different levels of difficulty, e.g., "easy", "medium", and "hard" (by changing the time interval/"gravityScale").
- Add game music.
- Refine sprites for higher resolution screens.

## Special Thanks

- Tiffany Lu for the background image
- Emanuele Feronato for his tutorial on Phaser states (http://www.emanueleferonato.com/2014/08/28/phaser-tutorial-understanding-phaser-states/)
