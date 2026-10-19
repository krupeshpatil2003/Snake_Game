// Import the required functions and variables from snake.js
// updateSnake -> Updates the snake's position
// drawSnake -> Draws the snake on the game board
// SNAKE_SPEED -> Controls how fast the snake moves
// snakeIntersection -> Checks whether the snake touches its own body
// getSnakeHead -> Returns the current position of the snake's head

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeIntersection, getSnakeHead } from './snake.js';

// Import the required functions from food.js
// updateFood -> Checks whether the snake has eaten the food
// drawFood -> Displays the food on the game board

import { update as updateFood, draw as drawFood } from './food.js';

// Import the function that checks whether the snake goes outside the grid

import { outSideGrid } from './grid.js';

// This variable stores the time when the game was last rendered.
// Initially, we set it to 0 because the game has not rendered yet.

let lastRenderTime = 0;

// Access the game board from index.html using its ID: game-board.
// We will draw the snake and food inside this element.

const gameBoard = document.getElementById('game-board');

// Initially, the game is not over, so we set gameOver to false.

let gameOver = false;

// This function controls the main game loop.
// currentTime gives us the current animation frame's timestamp.

function main(currentTime)
{
    // First, check whether the game is over.
    if (gameOver)
    {
        // Display a confirmation message when the player loses.
        // If the player clicks OK, the page reloads and the game restarts.

        if (confirm('You lost. Press OK to restart.'))
        {
            window.location.reload();
        }

        // Stop the current game loop after the game is over.
        return;
    }

    // Request the next animation frame.
    // This repeatedly calls main() so the game continues running.

    window.requestAnimationFrame(main);

    // Calculate how many seconds have passed since the last render.
    // We divide by 1000 because the timestamp is measured in milliseconds.

    const secondsSinceLastRender =
        (currentTime - lastRenderTime) / 1000;

    // Check whether enough time has passed for the snake to move.
    // For example, if SNAKE_SPEED is 5, the interval is 1 / 5 = 0.2 seconds.
    // If not enough time has passed, return and wait for another frame.

    if (secondsSinceLastRender < 1 / SNAKE_SPEED)
    {
        return;
    }

    // Store the current time as the last render time.
    // This helps control the speed of the game.

    lastRenderTime = currentTime;

    // Call update() to update the snake, food and collision status.

    update();

    // Call draw() to display the updated snake and food.

    draw();
}

// This function updates the game objects.
// First, update the snake's position.
// Then, check whether the snake has eaten the food.
// Finally, check whether the game should end.

function update()
{
    updateSnake();
    updateFood();
    checkDeath();
}

// This function draws the snake and food on the game board.

function draw()
{
    // Clear the previous drawing.
    // This allows us to redraw the snake and food at their new positions.

    gameBoard.innerHTML = '';

    // Draw the snake on the game board.

    drawSnake(gameBoard);

    // Draw the food on the game board.

    drawFood(gameBoard);
}

// This function checks the two conditions that can end the game:
// 1. The snake goes outside the grid.
// 2. The snake's head touches its own body.

function checkDeath()
{
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}

// Start the game loop by requesting the first animation frame.
// After this, main() keeps scheduling the next frame.

window.requestAnimationFrame(main);
