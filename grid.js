const GRID_SIZE = 21;

export function randomGridPosition()
{
    return {

        // Math.floor we did math functions inside that we did it 
        // we need mention for both x-axis also and y-axis also

        // Generate a random X coordinate from 1 to 21
        x: Math.floor(Math.random() * GRID_SIZE) + 1,

        // Generate a random Y coordinate from 1 to 21
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    };
}

export function outSideGrid(position) // Here I will implement my outside grid means when snake goes outside the Grid 
{
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    );
}


