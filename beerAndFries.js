"use strict";

function beerAndFries(item) {
    var  x,
    array_fries = [],
    array_beer = [],
    sum = 0;

    for (x in item){
        if(item[x].type === "fries"){
            array_fries.push(item[x].score);
        }
        else if(item[x].type === "beer"){
            array_beer.push(item[x].score);
        }
    }
    array_fries.sort(function(a, b){
        return a-b;
    });
    array_beer.sort(function(a, b){
        return a-b;
    });
    var i = 0,
        len = array_beer.length;
        for(i; i < len; i++){
           sum += (array_beer[i]*array_fries[i]);
        }
        return sum;
}

exports.beerAndFries = beerAndFries;