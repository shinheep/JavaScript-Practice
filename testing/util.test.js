const { generateText } = require('./util');


//unit test
test('should output name and age', () => {
    const text = generateText('Ellie', 1);
    expect(text).toBe('Ellie (1 years old)');
});

