while (true) {
    let first = prompt('Введите первое число');
    let second = prompt('Введите второе число');

    if (first != first * 1) {
        alert('Первый ввод - не число');
        continue;
    }

    if (second != second * 1) {
        alert('Второй ввод - не число');
        continue;
    }

    if (first === second) {
        alert('Числа равны');
    } else if (first > second) {
        alert('Первое число больше');
    } else {
        alert('Второе число больше');
    }
}