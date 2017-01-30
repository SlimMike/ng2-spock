import { Sign } from './sign';
import { Rock } from './rock';
import { Spock } from './spock';

export class Paper extends Sign {
  protected beatsSigns = {
    [Spock.name]: '',
    [Rock.name]: ''
  };
}
