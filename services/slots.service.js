const reel1 = ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'lemon', 'lemon'];
const reel2 = ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'bannana', 'lemon'];
const reel3 = ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'bannana', 'lemon'];
let coins = 20;

function spin() {
  coins--;
  if (coins <= 0) {
    coins = 20;
    throw new Error('Not Enough Coins , Resetting coins');
  }

  const items = [getRandomItem(reel1), getRandomItem(reel2), getRandomItem(reel3)];
  const won = calculateWin(items);
  coins = coins + won;

  return {
    items,
    won,
    coins
  };
}

function calculateWin(items) {
  let cherry = items.filter(item => item === 'cherry').length;
  let apple = items.filter(item => item === 'apple').length;
  let lemon = items.filter(item => item === 'lemon').length;
  let banana = items.filter(item => item === 'banana').length;

  if (cherry === 3) return 50;
  if (cherry === 2) return 40;
  if (apple === 3) return 20;
  if (apple === 2) return 10;
  if (banana === 3) return 15;
  if (banana === 2) return 5;
  if (lemon === 3) return 3;

  return 0;
}
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}
function getRandomItem(array) {
  return array[getRandomIndex(array.length)];
}

module.exports = { spin };
