import { sub } from '../src/sub';

describe('sub', () => {
  it('should subtract two numbers correctly', () => {
    const result = sub(5, 3);
    expect(result).toBe(2);
  });

  it('should return a negative number if the second number is greater', () => {
    const result = sub(3, 5);
    expect(result).toBe(-2);
  });

  // Add more test cases here...
});
