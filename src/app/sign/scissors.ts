import { Sign } from './sign';
import { Paper } from './paper';
import { Lizard } from './lizard';

export class Scissors extends Sign {
  protected beatsSigns = {
    [Paper.name]: '',
    [Lizard.name]: ''
  };
}
