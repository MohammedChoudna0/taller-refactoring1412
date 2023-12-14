const isOddNumber = (num) => {
  return num % 2 === 0;
};

describe("isOddNumber", () => {
  it("should return if the number is odd", () => {
    const num1 = 2;
    const num2 = 3;
    //Arrange
    //Act 
    //Assert
    const resultTrue = isOddNumber(num1);
    const resultFalse = isOddNumber(num2);
    expect(resultTrue).toBeTruthy();
    expect(resultFalse).toBeFalsy();
  });
});
//Añade los test
