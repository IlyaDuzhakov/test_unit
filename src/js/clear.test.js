// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.
// Описание
// Реализуйте функцию, которая на вход принимает объект вида:

// {name: 'Маг', health: 90}
// И возвращает ответ в виде одной из строк: healthy, wounded, critical

import indicateHealth from "./clear";

test('green', () => {
    expect(indicateHealth({name: 'Маг', health: 90})).toBe('healthy') // healthy строка, поэтому мы можем использовать простое сравнение
})

test('yellow', () => {
    expect(indicateHealth({name: 'Маг', health: 45})).toBe('wounded') 
})
test('red', () => {
    expect(indicateHealth({name: 'Маг', health: 10})).toBe('critical')  
})