const sum = (num1, num2) => {
  return num1 + num2;
};

describe("sum", () => {
  it("should return two numbers sum", () => {
    const num1 = 2;
    const num2 = 3;
    //Arrange
    //Act 
    //Assert
    const result = sum(num1, num2);
    expect(result).toBe(2);
  });
});
