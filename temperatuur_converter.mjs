import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function temperatuurConverter(temperatuur, isCelcius) {
    if (isCelcius) {
        
        return (temperatuur * 9/5) + 32;
    } else {
        
        return (temperatuur - 32) * 5/9;
    }
}

process.exit()