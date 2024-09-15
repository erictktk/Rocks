//const { RandomWrapper } = require('eric-random-wrapper');
//const { EdgeExample2 } = require('../src/fixing-core/Edges/EdgeExample');
import { RandomWrapper } from "eric-random-wrapper";
import { EdgeExample2 } from "../src/fixing-core/Edges/EdgeExample.js";

function edgeExampleTries(tries=20, pixelArrayArr, func=null){
    const rw = new RandomWrapper();

    if (!func){
        //
    }

    const newPAs = [];
    let choice;
    for( let i = 0; i < tries; i += 1){
        choice = rw.choice(pixelArrayArr);
        EdgeExample2(choice);
        newPAs.push(EdgeExample2);
    }

    return newPAs;
}

module.exports = { edgeExampleTries };
