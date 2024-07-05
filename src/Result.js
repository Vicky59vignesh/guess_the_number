import React from "react";

function Result ({secretNum, term}){
    let result;

    if(term){

    if (term  > secretNum){
            result ='Higher';
    }
    else if(term  < secretNum){
        result = 'Lower';

    }
    else if(term==secretNum)
        {
            result = 'Yippee! Correct';
        }
        else
        {
            result='Enter Valid Input';
        }
    }


        
    return <h3>You Guesses: {result}</h3>
}

export default Result;