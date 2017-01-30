import { Sign } from './sign';
import { Scissors } from './scissors';
import { Rock } from './rock';

export class Spock extends Sign {
  protected beatsSigns = {
    [Scissors.name]: 'Spock smashes scissors',
    [Rock.name]: 'Spock vaporizes rock'
  };
}
