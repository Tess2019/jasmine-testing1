describe ("My whatCanIDrink function", function(){
    beforeEach(function() {
        drink= new whatCanIDrink();
    });

describe ("Checks age", function(){
    it ("should exist", function(){
    expect (whatCanIDrink).toBeDefined();
});

it ("should return drink toddy when called as whatCanIDrink(13) ", function() {
var result =  whatCanIDrink(13)
expect (result).toBe ("Drink toddy");
});

it ("should return drink coke when called as whatCanIDrink(17) ", function(){
    var result =whatCanIDrink (17)
expect (result). toBe ("Drink coke")
});

it ("should return drink beer when called as whatCanIDrink(18)", function(){
    var result = whatCanIDrink (18)
expect (result).toBe ("Drink beer");
});

it ("should return drink beer when called as whatCanIDrink(20)", function(){
    var result = whatCanIDrink (20)
expect (result).toBe ("Drink beer");
});

it ("should return drink whisky when called as whatCanIDrink(30)", function(){
    var result =whatCanIDrink (30)
expect(result).toBe("Drink Whisky");
});

it ("should be unable to return drink when called as whatCanIDrink(140)", function(){
    var result =whatCanIDrink (140)
expect (result).toBe ("Sorry. I can’t tell what drink because that age is incorrect!");
});

it ("should return drink when called as whatCanIDrink()", function(){
    var result = whatCanIDrink().indexOf ("drink");
    expect (result).not.toEqual (-1);
} );
});
});