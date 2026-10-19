let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x: 0, y: 0}

//Now i will add some Event listners 

window.addEventListener('keydown', e => {
  changeDirection(e.key)
})

// Function to change the direction of the snake
function changeDirection(key) {
  switch (key) {
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break
      inputDirection = {x: 0, y: -1}
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = {x: 0, y: 1}
      break
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break
      inputDirection = {x: -1, y: 0}
      break 
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = {x: 1, y: 0}
      break
  }
}

// Mobile touch controls
document.querySelectorAll('#mobile-controls button').forEach(button => {
  button.addEventListener('pointerdown', e => {
    e.preventDefault()
    changeDirection(button.dataset.key)
  })
})

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
