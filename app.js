// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dolares){
    return dolares*106.58;
}

function fromEuroToDollar(euro){
    
    return euro*1.2;
}

function fromYenToPound(yen){
    return yen*0.0062;
}

module.exports={fromDollarToYen, fromEuroToDollar, fromYenToPound};