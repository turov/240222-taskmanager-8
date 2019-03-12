import {getRandomInteger, board, mainFilter, FILTER_PROPS} from './utils';
import createFilter from './create-filter';
import {generateTask} from './data';
import Task from './task';
import TaskEdit from './taskEdit';

// Запускаем цикл рендера фильтров
FILTER_PROPS.forEach((element) => {
  const filter = createFilter(element.name, element.count, element.checked, element.disabled);
  mainFilter.appendChild(filter);
});

// Функция генерации массива с данными
const makeTasks = (count) => {
  const tasks = [];
  for (let i = 0; i < count; i++) {
    tasks.push(generateTask());
  }
  return tasks;
};

const renderTasks = (tasks) => {
  tasks.forEach((element) => {

    const taskComponent = new Task(element);
    const editTaskComponent = new TaskEdit(element);

    taskComponent.onEdit = () => {
      editTaskComponent.render();
      board.replaceChild(editTaskComponent.element, taskComponent.element);
      taskComponent.unrender();
    };

    editTaskComponent.onSubmit = () => {
      taskComponent.render();
      board.replaceChild(taskComponent.element, editTaskComponent.element);
      editTaskComponent.unrender();
    };

    board.appendChild(taskComponent.render());
  });
};

renderTasks(makeTasks(7));

// Функция обнуления доски и её заполнения случайным количеством карточек (от 1 до 12)
function generateCards() {
  board.innerHTML = ``;
  renderTasks(makeTasks(getRandomInteger(1, 12)));
}

// Находим в DOM фильтры
const filterLabels = document.body.querySelectorAll(`.filter__label`);

// Навешиваем события клика на каждый фильтр по которому вызывается функция generateCards
filterLabels.forEach((element) => {
  element.addEventListener(`click`, generateCards);
});
