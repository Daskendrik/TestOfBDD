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
    describe("возврат отрицательных в виде NaN", function(){
        it("возводим в отрицательную степень и получаем NaN", function(){
            assert.isNaN(pow(2,-1))
        })
    })
    describe("возврат дробных в виде NaN", function(){
        it("возводим в дробную степень и получаем NaN",function(){
            assert.isNaN(pow(2,-1.5))
        })
    })


    // it("возводит в степень n", function() {
    //   assert.equal(pow(2, 3), 8);
    // });
    // it("возведение в степень n", function(){
    //    assert.equal(pow(3, 3), 27); 
    // })
});
// describe("тест", function() {

//     before(() => alert("Тестирование началось – перед тестами"));
//     after(() => alert("Тестирование закончилось – после всех тестов"));
  
//     beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
//     afterEach(() => alert("После теста – заканчиваем выполнение теста"));
  
//     it('тест 1', () => alert(1));
//     it('тест 2', () => alert(2));
  
//   })