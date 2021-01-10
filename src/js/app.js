/* eslint-disable class-methods-use-this */
import json from './Parser';

import read from './Reader';

export default class GameSavingLoader {
  load() {
    return new Promise((resolve, reject) => {
      const data = new Promise((resolve, reject) => {
        resolve(read());
      });
      data.then((response) => console.log(json(response)));
      resolve(data);
    });
  }
}

const loader = new GameSavingLoader();

console.log(loader.load().then((response) => response));

// export default class GameSavingLoader {
//   load() {
//     const data = new Promise((resolve, reject) => {
//       resolve(console.log(read()));
//     });
//     const value = new Promise((resolve, reject) => {
//       resolve(console.log(json(data)));
//     });
//     data.then(value);
//     value.then((response) => console.log(response));
//     return [data, value];
//   }
// }

// const loader = new GameSavingLoader();

// console.log(loader.load());
