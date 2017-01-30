import { Sign } from './sign';
import { Spock } from './spock';
import { Paper } from './paper';

export class Lizard extends Sign {
  protected beatsSigns = {
    [Spock.name]: 'Lizard poisons spock',
    [Paper.name]: 'Lizard eats paper'
  };
}
