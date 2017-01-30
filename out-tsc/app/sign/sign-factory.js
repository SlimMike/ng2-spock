import { Rock } from './rock';
import { Paper } from './paper';
import { Scissors } from './scissors';
import { Lizard } from './lizard';
import { Spock } from './spock';
export var SignFactory = (function () {
    function SignFactory() {
    }
    SignFactory.createFromString = function (name) {
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
    };
    return SignFactory;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/sign-factory.js.map