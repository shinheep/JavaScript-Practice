const { generateText, checkAndGenerate } = require('./util');


//unit test
test('should output name and age', () => {
    const text = generateText('Ellie', 1);
    expect(text).toBe('Ellie (1 years old)');
});

//integration test
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Ellie', 1);
    expect(text).toBe('Ellie (1 years old)')
});