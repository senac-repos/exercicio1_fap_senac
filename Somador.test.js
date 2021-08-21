const cont = require('./Somador')

test('validar se 5 + 5 é igual a 10', () => {
    expect(cont(5, 5)).toBe(10);
})

test('validar que 5 + 5 não pode ser igual a 5', () => {
    expect(cont(5, 5)).not.toBe(5);
})