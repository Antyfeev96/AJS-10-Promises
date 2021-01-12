/* eslint-disable class-methods-use-this */
import json from './Parser';

import read from './Reader';

export default class GameSavingLoader {
  load() {
    return read().then((response) => json(response));
  }
}
