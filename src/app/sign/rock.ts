import { Sign } from './sign';
import { Scissors } from './scissors';
import { Lizard } from './lizard';

export class Rock extends Sign {
  protected beatsSigns = {
    [Scissors.name]: 'Rock crushes scissors',
    [Lizard.name]: 'Rock crushes lizard'
  };
}
