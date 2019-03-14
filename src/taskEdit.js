import {colors} from './utils';
import {createElement} from './create-element';

export default class TaskEdit {
  constructor(data, id) {
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._tags = data.tags;
    this._picture = data.picture;
    this._color = data.color;
    this._repeatingDays = data.repeatingDays;
    this._isFavorite = data.isFavorite;
    this._isDone = data.isDone;
    this._id = id;

    this._element = null;
    this._onSubmit = null;
  }

  _onSubmitButtonClick(e) {
    e.preventDefault();
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }

  _isRepeated() {
    return Object.values(this._repeatingDays).some((it) => it === true);
  }

  _isDeadline() {
    return (this._dueDate.date !== ` `);
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get element() {
    return this._element;
  }

  get template() {
    return `<article class="card card--edit card--${this._color} ${this._isRepeated() ? `card--repeat` : ``}">
  <form class="card__form" method="get">
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
        ${this._title}</textarea
        >
      </label>
    </div>

    <div class="card__settings">
      <div class="card__details">
        <div class="card__dates">
          <button class="card__date-deadline-toggle" type="button">
            date: <span class="card__date-status">${this._isDeadline() ? `yes` : `no`}</span>
          </button>

          <fieldset class="card__date-deadline" disabled>
            <label class="card__input-deadline-wrap">
              <input
                class="card__date"
                type="text"
                placeholder="23 September"
                name="date"
                value="${this._dueDate}"
              />
            </label>
            <label class="card__input-deadline-wrap">
              <input
                class="card__time"
                type="text"
                placeholder="11:15 PM"
                name="time"
                value="${this._dueDate}"
              />
            </label>
          </fieldset>

          <button class="card__repeat-toggle" type="button">
            repeat:<span class="card__repeat-status">${this._isRepeated() ? `yes` : `no`}</span>
          </button>

          <fieldset class="card__repeat-days">
            <div class="card__repeat-days-inner">
            ${Object.keys(this._repeatingDays).map((element) => {
    return `<input class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id="repeat-${element}-${this._id + 1}"
        name="repeat"
        value="${element}"
        ${this._repeatingDays[element] ? `checked` : ``}
        "/>
      <label class="card__repeat-day" for="repeat-${element}-${this._id + 1}"
        >${element}</label>`;
  }).join(``)}
            </div>
          </fieldset>
        </div>

        <div class="card__hashtag">
          <div class="card__hastag-list>
          ${this._tags.map((element) => {
    return `<span class="card__hashtag-inner">
            <input
              type="hidden"
              name="hashtag"
              value="repeat"
              class="card__hashtag-hidden-input"
            />
            <button type="button" class="card__hashtag-name">
              #${element}
            </button>
            <button type="button" class="card__hashtag-delete">
              delete
            </button>
          </span>`;
  }).join(``)}
          </div>
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
          src="${this._picture}"
          alt="task picture"
          class="card__img"
        />
      </label>

      <div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>
          <div class="card__colors-wrap">

          ${Object.keys(colors).map((element) => {
    return `<input
            type="radio"
            id="color-${element}-${this._id + 1}"
            class="card__color-input card__color-input--${element} visually-hidden"
            name="color"
            value="${element}"
            ${element === this._color ? `checked` : ``}
        />
        <label
          for="color-${element}-${this._id + 1}"
          class="card__color card__color--${element}"
          >${element}</label>`;
  }).join(``)}
          </div>
      </div>
    </div>

    <div class="card__status-btns">
      <button class="card__save" type="submit">save</button>
      <button class="card__delete" type="button">delete</button>
    </div>
  </div>
</form>`.trim();
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }

  bind() {
    this._cardForm = this._element.querySelector(`.card__form`);
    this._onSubmitButtonClickBound = this._onSubmitButtonClick.bind(this);
    this._cardForm.addEventListener(`submit`, this._onSubmitButtonClickBound);
  }

  unbind() {
    this._cardForm.removeEventListener(`sumbit`, this._onSubmitButtonClickBound);
  }

  // bind() {
  //   this._element.querySelector(`.card__form`)
  //       .addEventListener(`submit`, this._onSubmitButtonClick.bind(this));
  // }

  // unbind() {
  //   this._element.querySelector(`.card__form`)
  //       .removeEventListener(`submit`, this._onSubmitButtonClick.bind(this));
  // }
}
