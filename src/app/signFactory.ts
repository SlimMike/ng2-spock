import { Rock } from './rock';
import { Paper } from './paper';
import { Scissors } from './scissors';
import { Lizard } from './lizard';
import { Spock } from './spock';
import { Sign } from './sign';

export class SignFactory {

  public static createFromString(name: string): Sign {
    switch (name) {
      case 'Rock':
        return new Rock;
      case 'Paper':
        return new Paper;
      case 'Scissors':
        return new Scissors;
      case 'Lizard':
        return new Lizard;
      case 'Spock':
        return new Spock;
    }

    throw 'invalid name';
  }
}
