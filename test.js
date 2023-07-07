describe("pow", function() {

    describe("возводит x в степень 3", function() {
        function makeTest(x) {
            let exepted = x * x * x
            it(`${x} в степени 3 будет ${exepted}`, function(){
                assert.equal(pow(x,3), exepted);
            })
        }

        for(let x = 1; x <= 5; x++){
            makeTest(x)
        }
    });
    describe("возводит x в степень 4", function() {
        function makeTest(x) {
            let exepted = x * x * x * x
            it(`${x} в степени 4 будет ${exepted}`, function(){
                assert.equal(pow(x,4), exepted);
            })
        }

        for(let x = 1; x <= 5; x++){
            makeTest(x)
        }
    });


    // it("возводит в степень n", function() {
    //   assert.equal(pow(2, 3), 8);
    // });
    // it("возведение в степень n", function(){
    //    assert.equal(pow(3, 3), 27); 
    // })
});