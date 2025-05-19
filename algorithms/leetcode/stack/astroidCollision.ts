function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const asteroid of asteroids) {
    let alive = true;

    while (alive && stack.length > 0 && stack.at(-1) > 0 && asteroid < 0) {
      if (Math.abs(stack.at(-1)) < Math.abs(asteroid)) {
        stack.pop(); // Взрыв предыдущего астероида
      } else if (Math.abs(stack.at(-1)) === Math.abs(asteroid)) {
        stack.pop(); // Оба уничтожаются
        alive = false; // Текущий тоже уничтожен!
      } else {
        alive = false; // Текущий уничтожен стеком (в нём больше)
      }
    }

    if (alive) {
      stack.push(asteroid);
    }
  }

  return stack;
}

console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
