'use strict';

const PAGE = document.body;
const MAIN_FILTER = PAGE.querySelector(`.main__filter`);
const BOARD = PAGE.querySelector(`.board__tasks`);

// Функция рендера фильтра

function renderFilter(
  name, count = 0, isChecked, isDisabled) {
  const FILTER = document.createElement(`div`);
  FILTER.innerHTML = /*html*/ `<input
  type="radio"
  id="filter__${name}"
  class="filter__input visually-hidden"
  name="filter"
  ${isChecked ? "checked" : ""}
  ${isDisabled ? "disabled" : ""}
/>
<label for=filter__${name} class="filter__label"
  >${name} <span class="filter__${name}-count">${count}</span></label
>`
  MAIN_FILTER.appendChild(FILTER);
};

// Функция нахождения псевдослучайного числа

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
};

// Функция рендера базовой карточки

function renderCard() {
  const CARD = document.createElement(`article`);
  CARD.classList.add(`card`);
  CARD.innerHTML = /*html*/ `<form class="card__form" method="get">
  <div class="card__inner">
    <div class="card__control">
      <button type="button" class="card__btn card__btn--edit">
        edit
      </button>
      <button type="button" class="card__btn card__btn--archive">
        archive
      </button>
      <button
        type="button"
        class="card__btn card__btn--favorites card__btn--disabled"
      >
        favorites
      </button>
    </div>

    <div class="card__color-bar">
      <svg class="card__color-bar-wave" width="100%" height="10">
        <use xlink:href="#wave"></use>
      </svg>
    </div>

    <div class="card__textarea-wrap">
      <label>
        <textarea
          class="card__text"
          placeholder="Start typing your text here..."
          name="text"
        >
It is example of repeating task. It marks by wave.</textarea
        >
      </label>
    </div>

    <div class="card__settings">
      <div class="card__details">
        <div class="card__dates">
          <button class="card__date-deadline-toggle" type="button">
            date: <span class="card__date-status">no</span>
          </button>

          <fieldset class="card__date-deadline" disabled>
            <label class="card__input-deadline-wrap">
              <input
                class="card__date"
                type="text"
                placeholder="23 September"
                name="date"
              />
            </label>
            <label class="card__input-deadline-wrap">
              <input
                class="card__time"
                type="text"
                placeholder="11:15 PM"
                name="time"
              />
            </label>
          </fieldset>

          <button class="card__repeat-toggle" type="button">
            repeat:<span class="card__repeat-status">no</span>
          </button>

          <fieldset class="card__repeat-days" disabled>
            <div class="card__repeat-days-inner">
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-mo-2"
                name="repeat"
                value="mo"
              />
              <label class="card__repeat-day" for="repeat-mo-2"
                >mo</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-tu-2"
                name="repeat"
                value="tu"
                checked
              />
              <label class="card__repeat-day" for="repeat-tu-2"
                >tu</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-we-2"
                name="repeat"
                value="we"
              />
              <label class="card__repeat-day" for="repeat-we-2"
                >we</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-th-2"
                name="repeat"
                value="th"
              />
              <label class="card__repeat-day" for="repeat-th-2"
                >th</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-fr-2"
                name="repeat"
                value="fr"
                checked
              />
              <label class="card__repeat-day" for="repeat-fr-2"
                >fr</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                name="repeat"
                value="sa"
                id="repeat-sa-2"
              />
              <label class="card__repeat-day" for="repeat-sa-2"
                >sa</label
              >
              <input
                class="visually-hidden card__repeat-day-input"
                type="checkbox"
                id="repeat-su-2"
                name="repeat"
                value="su"
                checked
              />
              <label class="card__repeat-day" for="repeat-su-2"
                >su</label
              >
            </div>
          </fieldset>
        </div>

        <div class="card__hashtag">
          <div class="card__hashtag-list">
            <span class="card__hashtag-inner">
              <input
                type="hidden"
                name="hashtag"
                value="repeat"
                class="card__hashtag-hidden-input"
              />
              <button type="button" class="card__hashtag-name">
                #repeat
              </button>
              <button type="button" class="card__hashtag-delete">
                delete
              </button>
            </span>

            <span class="card__hashtag-inner">
              <input
                type="hidden"
                name="hashtag"
                value="repeat"
                class="card__hashtag-hidden-input"
              />
              <button type="button" class="card__hashtag-name">
                #cinema
              </button>
              <button type="button" class="card__hashtag-delete">
                delete
              </button>
            </span>

            <span class="card__hashtag-inner">
              <input
                type="hidden"
                name="hashtag"
                value="repeat"
                class="card__hashtag-hidden-input"
              />
              <button type="button" class="card__hashtag-name">
                #entertaiment
              </button>
              <button type="button" class="card__hashtag-delete">
                delete
              </button>
            </span>
          </div>

          <label>
            <input
              type="text"
              class="card__hashtag-input"
              name="hashtag-input"
              placeholder="Type new hashtag here"
            />
          </label>
        </div>
      </div>

      <label class="card__img-wrap card__img-wrap--empty">
        <input
          type="file"
          class="card__img-input visually-hidden"
          name="img"
        />
        <img
          src="img/add-photo.svg"
          alt="task picture"
          class="card__img"
        />
      </label>

      <div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>
        <div class="card__colors-wrap">
          <input
            type="radio"
            id="color-black-2"
            class="card__color-input card__color-input--black visually-hidden"
            name="color"
            value="black"
          />
          <label
            for="color-black-2"
            class="card__color card__color--black"
            >black</label
          >
          <input
            type="radio"
            id="color-yellow-2"
            class="card__color-input card__color-input--yellow visually-hidden"
            name="color"
            value="yellow"
          />
          <label
            for="color-yellow-2"
            class="card__color card__color--yellow"
            >yellow</label
          >
          <input
            type="radio"
            id="color-blue-2"
            class="card__color-input card__color-input--blue visually-hidden"
            name="color"
            value="blue"
          />
          <label
            for="color-blue-2"
            class="card__color card__color--blue"
            >blue</label
          >
          <input
            type="radio"
            id="color-green-2"
            class="card__color-input card__color-input--green visually-hidden"
            name="color"
            value="green"
          />
          <label
            for="color-green-2"
            class="card__color card__color--green"
            >green</label
          >
          <input
            type="radio"
            id="color-pink-2"
            class="card__color-input card__color-input--pink visually-hidden"
            name="color"
            value="pink"
            checked
          />
          <label
            for="color-pink-2"
            class="card__color card__color--pink"
            >pink</label
          >
        </div>
      </div>
    </div>

    <div class="card__status-btns">
      <button class="card__save" type="submit">save</button>
      <button class="card__delete" type="button">delete</button>
    </div>
  </div>
</form>`
  BOARD.appendChild(CARD);
};

// Массив с обьектами свойств фильтров

const FILTER_PROPS = [{
    name: `all`,
    count: randomInteger(0, 1000),
    checked: `checked`,
    disabled: ``
  },
  {
    name: `overdue`,
    checked: ``,
    disabled: `disabled`
  },
  {
    name: `today`,
    checked: ``,
    disabled: `disabled`
  },
  {
    name: `favorites`,
    count: randomInteger(0, 1000),
    checked: ``,
    disabled: ``
  },
  {
    name: `repeating`,
    count: randomInteger(0, 1000),
    checked: ``,
    disabled: ``
  },
  {
    name: `tags`,
    count: randomInteger(0, 1000),
    checked: ``,
    disabled: ``
  },
  {
    name: `archive`,
    count: randomInteger(0, 1000),
    checked: ``,
    disabled: ``
  }
];

// Обнуляем готовую разметку и запускаем цикл рендера фильтров
MAIN_FILTER.innerHTML = ``;
FILTER_PROPS.forEach(element => {
  renderFilter(element.name, element.count, element.checked, element.disabled)
});

// Обнуляем готовую разметку и запускаем цикл рендера карточек

BOARD.innerHTML = ``;
for (let i = 0; i < 7; i++) {
  renderCard()
}
