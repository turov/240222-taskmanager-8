import repeatingDays from './create-repeating-days';
import getHastags from './create-hashtags';

export default (task) => {
  const card = document.createElement(`article`);
  card.classList.add(`card`, `card--${task.color}`);
  card.innerHTML = `<form class="card__form" method="get">
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
        ${task.title}</textarea
        >
      </label>
    </div>

    <div class="card__settings">
      <div class="card__details">
        <div class="card__dates">
          <button class="card__date-deadline-toggle" type="button">
            date: <span class="card__date-status">${task.dueDate}</span>
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

          <fieldset class="card__repeat-days">
            ${repeatingDays()}
          </fieldset>
        </div>

        <div class="card__hashtag">
          ${getHastags()}
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

      <label class="card__img-wrap">
        <input
          type="file"
          class="card__img-input visually-hidden"
          name="img"
        />
        <img
          src="${task.picture}"
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
</form>`;
  return card;
};
