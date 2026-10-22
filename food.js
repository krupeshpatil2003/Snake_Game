import { onSnake , expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition()
//let food = {x:10 , y:1};
const EXPANSION_RATE=5 // After eating the food the snake size should get expanded 

export function update() 
{
    // If I want to check the status of our snake if the snake has eaten the food 
    if(onSnake(food))
    {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
        //food={x:20 , y:10} // instead of using hard coded values i mean the fixed values i will use randomfood position as above 
    }
}

/* In That snake.js file that  snake element export function here below we copy pasted and change it too food.js becoz like a snake i want a food */
export function draw(gameBoard) // Here I have export so Now I have to import these files na so I have imported in game.js
{
        const foodElement = document.createElement('div');
        //const snakeElement=document.createElement('div')
        foodElement.style.gridRowStart =  food.y // means food I have created now and to style it Row it will start and on Y axis it will go horizontal direction 
        foodElement.style.gridColumnStart = food.x // and here It will go x axis  column means vertically direction 
        foodElement.classList.add('food') // className I have added here
        gameBoard.appendChild(foodElement); 
    

}

function getRandomFoodPosition()
{
    let newFoodPosition
    while(newFoodPosition==null || onSnake(newFoodPosition)) // you have experience this thing while playing snake game -> when the snake becomes very long and when it touches to itself the game is over
    {
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition // if the above condition is not true we will returning new food position 
}
