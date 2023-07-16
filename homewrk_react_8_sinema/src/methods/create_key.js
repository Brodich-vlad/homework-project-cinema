// Функція створення ID або Key.
export function createKey(num = 'v'){
    const ABC = "AaBbCcDdEeFfGgHhIiJiKkLlMmNnJjPpQqRrSsTtUuVvWwXxYyZz";
    const NUMBERS = "0123456789";
    const LETTERS = ABC + NUMBERS;
    let newId= "";
    for (let i = 0; i < 8; i++) {
        newId += LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }
    newId +=  `_${num}`;
    return newId;
}
