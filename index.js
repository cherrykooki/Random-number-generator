/** * Implementation of the Linear congruential generator * algorithm in JavaScript */
var X,a,c,m;

function linearCongruentialGenerator(){

    X = (a * X + c) % m;

    return X;

}