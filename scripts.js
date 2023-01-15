// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// С помощью браузера ... я открыл страничку ... 

// console.log('С помощью браузера ' + navigator.vendor + 'я открыл страничку ' + location.href)

//------------------------------------------------

// for (let list of document.querySelectorAll('li')){
//     console.log(list.innerText);
// }

//------------------------------------------------


// Задание 2
// В файле html есть разметка:
//<ul id="list">
//<li>Джон</li>
//<li>Пит</li>
//<li>Джессика</li>
//<li>Сара</li>//
//</ul>
// Вывести в консоль каждое из имен (содержимое каждого li).

//------------------------------------------------

// for (let list of document.querySelectorAll('li')){
//     console.log(list.innerText);
// }

//------------------------------------------------


// Задание 3
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

//------------------------------------------------

// document.body.children[0].children[0].innerText = '1'
// document.body.children[0].children[1].innerText = '2'
// document.body.children[0].children[2].innerText = '3'
// document.body.children[0].children[3].innerText = '4'

//------------------------------------------------


// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

//------------------------------------------------

// let newelement = document.createElement('p');
// newelement.innerText = 'content';
// newelement.style.fontWeight = '600';
// newelement.style.fontSize = '36px';
// document.body.appendChild(newelement);

//------------------------------------------------


// Задание 5
// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.

//------------------------------------------------

//document.body.children[4].innerText = '14.01.2023'

//------------------------------------------------


// Задание 6
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

//------------------------------------------------

// function makeNewTag(tag, color, content){
//     let newtag = document.createElement(tag);
//     newtag.style.color = color;
//     newtag.innerText = content;
//     document.body.appendChild(newtag)
//     return newtag;
// }
// console.log(makeNewTag('span', 'red', 'werty'));
// console.log(makeNewTag('p', '#22237', 'qeqry'));
// console.log(makeNewTag('h1', 'blue', 'fgg'));

//------------------------------------------------


// Задание 7
// Вставить в страницу (в html документ) тег <select>. С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.

//------------------------------------------------

// let select = document.querySelector("select");
// select.style.width = '100px';

// for (let i = 1960; i < 2021; i++) {
//     let option = document.createElement('option');
//     option.innerText = i;
//     select.appendChild(option);

// }

//------------------------------------------------


// Задание 8

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// [{
// name: "Женя",
// order: true
// },
// {
// name: "Кристина",
// order: true
// },
// {
// name: "Павел",
// order: false
// },
// {
// name: "Виолетта",
// order: false
// },
// {
// name: "Костя",
// order: true
// }];

// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

//------------------------------------------------

// let array = [{name: "Женя", order: true}, {name: "Кристина",order: true}, {name: "Павел", order: false}, {name: "Виолетта",order: false}, {name: "Костя", order: true}];

// for (let i = 0; i < array.length; i++) {
//     let orderOf = array[i].order;
//     if (orderOf){
//         orderOf = 'оплатил(a)'
//     }else {orderOf = 'отменил(a)'}

//     let list = document.createElement('li');
//     document.body.appendChild(list);
//     list.innerText = (`Клиент(ка) ${array[i].name}  ${orderOf}  заказ`)
// }

//------------------------------------------------


// Задание 9
// Есть массив ссылок:
// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

//------------------------------------------------

// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];

// let div = document.createElement('div');
// document.body.appendChild(div);
// div.style.padding = '100px' 
// div.style.backgroundColor = "green";
// for (let i = 0; i < linksArr.length; i++) {   
//     let a = document.createElement('a');
//     a.innerText = linksArr[i];
//     a.setAttribute("href", linksArr[i]);
//     div.appendChild(a);
// }

//------------------------------------------------


// Задание 10
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li

//------------------------------------------------

// let removedElement = document.querySelectorAll(".forRemove");
// for (let item of removedElement) {
//     item.remove();
// }

//------------------------------------------------


// Задание 11*
// Создать массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.

// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

//------------------------------------------------

// const users = [{name: 'Mark', age: 12}, {name: 'Olga', age: 30}, {name:'Tom', age: 25}, {name:'Den', age: 43}];

// let table = document.querySelector("table");
// for(i = 0; i < users.length; i++){
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     let td2 = document.createElement('td');
//     td1.innerText = users[i].name;
//     td2.innerText = users[i].age;
//     td1.style.backgroundColor = 'red';
//     td2.style.backgroundColor = 'blue';
//     tr.append(td1);
//     tr.append(td2);
//     table.append(tr);
// }

//------------------------------------------------




