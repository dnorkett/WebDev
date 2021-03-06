 //SPECs
 //Manually writing spec blocks to test
 describe("pow",function() {
     it("2 raised to power of 3 is 8", function() {
         assert.equal(pow(2, 3), 8);
     });
     it("3 raised to the power of 4 is 81", function(){
         assert.equal(pow(3,4), 81);
     });     
 })

 //Generating tests in a more automated fashion
 describe("pow", function(){

    function makeTest(x) {
        let expected = x*x*x;
        it(`${x} in the power of 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x=1; x <=5; x++){
        makeTest(x);
    }

 });