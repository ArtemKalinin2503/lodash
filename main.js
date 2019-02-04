//Работа lodach с массивами
function lodashArray() {
    var btnArray = document.getElementById('btnArr')
    btnArray.addEventListener('click', function() {

        var array = [1, 2, 3, false, undefined, ''];
        console.log(array);
        console.log('first', _.first(array)); //Метод first - возвращает первый элемент массива
        console.log('compact', _.compact(array)); //Метод compact - возвращает отфильтрованный массив от ложных значений
        console.log('drop', _.drop(array)); //Метод drop - удаляет первый элемент массива
        console.log('drop', _.drop(array, 3)); //Метод drop - с переданным вторым параметром, удаляет с начала массива переданное колличество элементов массива      
        console.log('dropRigth', _.dropRight(array,3)); //Метод dropRight - удаляет данные из массива с конца
        //console.log('fill', _.fill(array, 'Hello')); //Метод fill - заменит все данные в массиве на переданное значение вторым параметром (массив мутирует)
        console.log('fillIndex', _.findIndex(array, function(a) { //Метод findIndex - вернет индекс элемента в массива переданый в функцию (в данном случае найдем индекс цифры 3 в массиве)
            return a === 3
        }));
        //console.log('pull', _.pull(array, 2, 3)); //Метод pull - удаляет переданные элементы из массива (массив мутирует)
        console.log('reverse', _.reverse(array)); //Метод reverse - переворачивает массив (массив мутирует)

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
                id: 1,
                active: false
            },
            {
                name: 'name2',
                id: 2,
                active: true
            },
            {
                name: 'name3',
                id: 3,
                active: true
            }
        ];
        var arr2 = [];

        console.log('forEach', _.forEach(arrObj, function(item){ //Метод forEach - переберет массив и на основании переданного аргумента (взять с массива arrObj, все значения полей name и вставить их в массив arr2) верент новый массив объектов arr2
            arr2.push(item.name)
        }));
        console.log('map', _.map(arrObj, function(item) { //Метод map - перебирает массив и возвращает новый массив с полями name из массива arrObj и добавляет к каждому значению массива переаднный аргумент (в данном случае слово строка)
            return item.name + ' строка'
        }));
        function multByThree(obj) {
            return obj.id * 3;
        }
        console.log('map', _.map(arrObj, multByThree)); //Метод map - в данном случае будет принимать функцию multByThree которая будет брать id каждого объекта с массива объектов arrObj и умнажать 3 (массив мутирует)
        console.log('map', _.map(arrObj, 'name')); //Метод map - в данном случае вернет массив всех полей name из массива объектов arrObj
        console.log('filter', _.filter(arrObj, function(item) { //Метод filter - вернет новый массив исходя из переданных условий (в данном случае взять в массиве объектов arrObj все объекты с id больше 1)
            return item.id > 1;
        }));
        console.log('filter', _.filter(arrObj, {active: true})); //Метод filter - в данном случае вернет массив с объектами где поле active: true
        console.log('find', _.find(arrObj, function(item) { //Метод find - вернет массив с первым подходящим элементом исходя из переданных условий 
            return item.active === false;
        }));
        console.log('findlast', _.findLast(arrObj, function(item) { //Метод findLast - вернет массив с последним подходящим элементом исходя из переданных условий 
            return item.active === true;
        }));
        console.log('shuffle', _.shuffle(arrObj)); //Метод shuffle - рандомно каждый рах перемешивает переданный массив
        console.log('size', _.size(arrObj)); //Метод size - возвращает длину переданного массива или строки (со всеми типами данными)
        console.log('sortBy', _.sortBy(arrObj, [function(o){ //Метод sortBy - сортирует пераданный массив (по порядку)
            return o.active;
        }]));

    })
};
lodashObject();