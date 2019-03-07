import {getRandomInteger, board, mainFilter, FILTER_PROPS} from './utils';
import createFilter from './create-filter';
import createCard from './create-card';
import {generateTask} from './data';

// Запускаем цикл рендера фильтров
FILTER_PROPS.forEach((element) => {
  const filter = createFilter(element.name, element.count, element.checked, element.disabled);
  mainFilter.appendChild(filter);
});

// Функция заполнения доски карточками
const fillBoard = {
  makeCard: (count) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(createCard(generateTask()));
    }
    return cards;
  },
  fillDesk: (obj) => {
    obj.forEach((element) => {
      board.appendChild(element);
    });
  }
};


// Заполняем доску 7-ю карточками
fillBoard.fillDesk(fillBoard.makeCard(7));

// Функция обнуления доски и её заполнения случайным количеством карточек (от 1 до 12)
function generateCards() {
  board.innerHTML = ``;
  fillBoard.fillDesk(fillBoard.makeCard((getRandomInteger(1, 12))));
}

// Находим в DOM фильтры
const filterLabels = document.body.querySelectorAll(`.filter__label`);

// Навешиваем события клика на каждый фильтр по которому вызывается функция generateCards
filterLabels.forEach((element) => {
  element.addEventListener(`click`, generateCards);
});
