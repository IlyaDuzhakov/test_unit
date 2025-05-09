// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.
// Описание
// Реализуйте функцию, которая на вход принимает объект вида:

// {name: 'Маг', health: 90}
// И возвращает ответ в виде одной из строк: healthy, wounded, critical

export default function indicateHealth(obj) { // для такого экспорта создаём function declaration
    if (obj.health > 50) {
        return 'healthy'
    }
    else if (obj.health <= 50 && obj.health >= 15) {
        return 'wounded'
    }
    else {
        return 'critical'
    }
}
// indicateHealth({name: 'Маг', health: 90})