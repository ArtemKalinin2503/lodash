- Работа с библиотекой Lodash
- Lodash позволяет работать с массивами и объектами
- Официальная документация - https://lodash.com/
- Уроки по lodach - https://www.youtube.com/watch?v=sJ6TKy6aUXc

Работа с массивами:

var array = [1, 2, 3, false, undefined, ''];
 - console.log(array);
 - console.log(_.first(array)); //Метод first - возвращает первый элемент массива
 - console.log(_.compact(array)); //Метод compact - возвращает отфильтрованный массив от ложных значений
 - console.log(_.drop(array)); //Метод drop - удаляет первый элемент массива
 - console.log(_.drop(array, 3)); //Метод drop - с переданным вторым параметром, удаляет с начала массива переданное колличество элементов массива      
 - console.log(_.dropRight(array,3)); //Метод dropRight - удаляет данные из массива с конца
 - console.log(_.fill(array, 'Hello')); //Метод fill - заменит все данные в массиве на переданное значение вторым параметром (массив мутирует)
 - console.log(_.findIndex(array, function(a) { //Метод findIndex - вернет индекс элемента в массива переданый в функцию (в данном случае найдем индекс цифры 3 в массиве)
            return a === 3
}));
 - console.log(_.pull(array, 2, 3)); //Метод pull - удаляет переданные элементы из массива (массив мутирует)
 - console.log(_.reverse(array)); //Метод reverse - переворачивает массив (массив мутирует)
