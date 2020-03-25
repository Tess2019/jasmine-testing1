describe ("My whatCanIDrink function", function(){
    beforeEach(function() {
        drink= new whatCanIDrink();
    });

describe ("checks age", function(){
    it ("should exist", function(){
    expect (whatCanIDrink).toBeDefined();
});

it ("should reurn drink toddy when called as whatCanIDrink(< 13) ", funktion() {
var result =  WhatCanIDrink(13)
expect (result).toBe ("Drink toddy");
});

it ("should return drink coke when called as whatCanIDrink(17) ", funktion(){
    var result =WhatCanIDrink (17)
expect (result). toBe ("Drink coke");
});

it ("should return drink beer when called as whatCanIDrink(20)", funktion(){
    var result = WhatCanIDrink (20)
expect (result). toBe ("Drink beer");
});

it ("should return drink whisky when called as whatCanIDrink(30)", funktion(){
    var result =WhatCanIDrink (30)
expect(result).toBe ("Drink whisky");
});

it ("should return drink when called as whatCanIDrink(140)", funktion(){
    var result =WhatCanIDrink (140)
expect (result).toBe ("Sorry. I can’t tell what drink because that age is incorrect!");
});

it ("should return drink when test whatCanIDrink()called ", function(){
    var result = WhatCanIDrink().indexOf ("drink");
    expect (result).not.toEqual (-1);
} );
});
});