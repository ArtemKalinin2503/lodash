//Работа lodach с массивами
function lodashArray() {
    var btnArray = document.getElementById('btnArr')
    btnArray.addEventListener('click', function() {
        var array = [1, 2, 3, false, undefined, ''];
        console.log(array);
        console.log(_.first(array)); //Метод first - возвращает первый элемент массива
        console.log(_.compact(array)); //Метод compact - возвращает отфильтрованный массив от ложных значений
        console.log(_.drop(array)); //Метод drop - удаляет первый элемент массива
        console.log(_.drop(array, 3)); //Метод drop - с переданным вторым параметром, удаляет с начала массива переданное колличество элементов массива      
        console.log(_.dropRight(array,3)); //Метод dropRight - удаляет данные из массива с конца
        //console.log(_.fill(array, 'Hello')); //Метод fill - заменит все данные в массиве на переданное значение вторым параметром (массив мутирует)
        console.log(_.findIndex(array, function(a) { //Метод findIndex - вернет индекс элемента в массива переданый в функцию (в данном случае найдем индекс цифры 3 в массиве)
            return a === 3
        }));
        //console.log(_.pull(array, 2, 3)); //Метод pull - удаляет переданные элементы из массива (массив мутирует)
        console.log(_.reverse(array)); //Метод reverse - переворачивает массив (массив мутирует)
    });
}
lodashArray();

//Работа lodach с объектами
function lodashObject() {
    var btnObject = document.getElementById('btnObject');
    btnObject.addEventListener('click', function() {
        var arrObj = [
            {
                name: 'name1',
                id: 1
            },
            {
                name: 'name2',
                id: 2
            },
            {
                name: 'name3',
                id: 3
            }
        ];
        var arr2 = [];
        console.log(_.forEach(arrObj, function(item){ //Метод forEach - переберет массив и на основании переданного аргумента (взять с массива arrObj, все значения полей name и вставить их в массив arr2) верент новый массив объектов arr2
            arr2.push(item.name)
        }));
        console.log(_.map(arrObj, function(item) { //Метод map - перебирает массив и возвращает новый массив с полями name из массива arrObj и добавляет к каждому значению массива переаднный аргумент (в данном случае слово строка)
            return item.name + ' строка'
        }));
        function multByThree(obj) {
            return obj.id * 3;
        }
        //console.log(_.map(arrObj, multByThree)); //Метод map - в данном случае будет принимать функцию multByThree которая будет брать id каждого объекта с массива объектов arrObj и умнажать 3 (массив мутирует)
        console.log(_.map(arrObj, 'name')); //Метод map - в данном случае вернет массив всех полей name из массива объектов arrObj
        console.log(_.filter(arrObj, function(item) { //Метод filter - вернет новый массив исходя из переданных условий (в данном случае взять в массиве объектов arrObj все объекты с id больше 1)
            return item.id > 1;
        }));
    })
};
lodashObject();