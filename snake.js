import { getInputDirection } from "./input.js"

let lastRenderTime = 0 // let's say we have to save some rendered time - render time means you want to retrived that rendered time so we create the variable and we will store this value of this renderTime 
export const SNAKE_SPEED = 5; // Here I m exporting My snake Speed so now I can use it anywhere so now i have import SNAKE_SPEED from Snake.js // import {SNAKE_SPEED} from './snake.js';
let newSegments = 0

/* I want to create my snake for that purpose I will represent the snake basically in X-axis and Y-axis becoz
snake will be travelling from Up , Down , left , Right likewise direction so for that purpose I will represent my snake body 
in X and Y direction  
*/

const snakeBody = [{x:10 , y:11}] /* Initially only 1 grid was there means 1 array now we add 2 more arrays in the same array so it means these 3 arrays we have put and increase the SnakeBody with respect to x-axis and y-axis  */

export function update() // Here I have export so Now I have to import these files na so I have imported in game.js
{
    addSegments(); // define it to the zero value 
    // InputDirection I want to set in update function I will set InputDirection
    const inputDirection = getInputDirection()

    //console.log('Update snake');
    // length-2 means I want to go from last i want to start the iteration till first index 0 i want to go means in reverse way I want to iterate 
    for(let i=snakeBody.length-2; i>=0; i--)
    {
        snakeBody[i+1]={ ...snakeBody[i] }; // I m making the last grid to make last - 1 grid  means we are traveelling the snake upside 
        /* let's say you dont want to get manipulated with previous data of snakeBody by doing this --> {...snakeBody[i]} these three dots I have means it is sprit concept of javascript it will keep your previous content as it is  */
    }

    // we dont want to game to move in single direction means fixed values so want to press some keys and you want move the snake upwards , downwards , sidewways in any direction we want to move so the below thing I commented these are Hard coded values means fix values
    // so for that purpose I have made input.js file
    //snakeBody[0].x+=1
    //snakeBody[0].y+=0 
    
    snakeBody[0].x+=inputDirection.x
    snakeBody[0].y+=inputDirection.y

}

export function draw(gameBoard) // Here I have export so Now I have to import these files na so I have imported in game.js
{
    //console.log('draw snake'); // writing console.log is of no use so i will comment this line and I will give some kind of Functionality
    // so now below i will write some sort of code and give functionality to our web page becoz it is blank page 
    snakeBody.forEach(segment=>{ // this is for loop used that we have learnt in types of loops .. snakeBody it will start iterating till segment  it will go and we have used Arrow Function here 
        const snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart =  segment.y // means snake I have created now and to style it Row it will start and on Y axis it will go horizontal direction 
        snakeElement.style.gridColumnStart = segment.x // and here It will go x axis  column means vertically direction 
        snakeElement.classList.add('snake') // className I have added here
        gameBoard.appendChild(snakeElement); 
    })

}

export function expandSnake(amount)
{
    newSegments+=amount;
}

// this function we created for the current snake position 
export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function getSnakeHead()
{
    return snakeBody[0]
}

export function snakeIntersection() 
{
  return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1 , pos2)
{
    return pos1.x===pos2.x && pos1.y===pos2.y // if the segment and the postion both of this is same strictly same then I will returnn true 
}


// If my snake is eating that particular food then I want to get that snake size to get increase 
function addSegments()
{
    for(let i=0; i<newSegments; i++)
    {
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }

    newSegments = 0

}





