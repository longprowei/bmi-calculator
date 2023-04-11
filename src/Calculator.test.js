import { calculatorBMI } from './Calculator';

describe('calculatorBMI function', () => {
  it('should calculate BMI correctly for valid input', () => {
    // Arrange
    const weight = 70;
    const height = 170;
    
    // Act
    const bmi = calculatorBMI(weight, height);

    // Assert
    expect(bmi).toBe(24.22);
  });

  it('should return an empty string for invalid input', () => {
    // Arrange
    const weight = 0;
    const height = 170;
    
    // Act
    const bmi = calculatorBMI(weight, height);

    // Assert
    expect(bmi).toBe('');
  });

  it('should return an empty string for very small bmi', () => {
    // Arrange
    const weight = 1;
    const height = 170;
    
    // Act
    const bmi = calculatorBMI(weight, height);

    // Assert
    expect(bmi).toBe('');
  });

  it('should return an empty string for very big bmi', () => {
    // Arrange
    const weight = 70;
    const height = 1;
    
    // Act
    const bmi = calculatorBMI(weight, height);

    // Assert
    expect(bmi).toBe('');
  });
});
