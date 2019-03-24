import {colors} from './utils';
import Component from './component';
import flatpickr from 'flatpickr';
import moment from 'moment';

export default class TaskEdit extends Component {
  constructor(data, id) {
    super();
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._tags = data.tags;
    this._picture = data.picture;
    this._color = data.color;
    this._repeatingDays = data.repeatingDays;
    this._isFavorite = data.isFavorite;
    this._isDone = data.isDone;
    this._id = id;

    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onSubmit = null;

    this._state.isDate = this._isDeadline();
    this._state.isRepeated = this._isRepeated();

    this._onChangeDate = this._onChangeDate.bind(this);
    this._onChangeRepeated = this._onChangeRepeated.bind(this);
  }

  _processForm(formData) {
    const entry = {
      title: ``,
      color: ``,
      tags: new Set(),
      dueDate: new Date(),
      repeatingDays: {
        'mo': false,
        'tu': false,
        'we': false,
        'th': false,
        'fr': false,
        'sa': false,
        'su': false,
      }
    };

    const taskEditMapper = TaskEdit.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      if (taskEditMapper[property]) {
        taskEditMapper[property](value);
      }
    }

    return entry;
  }

  _onSubmitButtonClick(e) {
    e.preventDefault();
    const formData = new FormData(this._element.querySelector(`.card__form`));
    const newData = this._processForm(formData);
    if (typeof this._onSubmit === `function` && this._onSubmit(newData)) {
      this._onSubmit();
    }
    this.update(newData);
  }

  _onChangeDate() {
    this._state.isDate = !this._state.isDate;
    this._removeListeners();
    this._partialUpdate();
    this._addListeners();
  }

  _onChangeRepeated() {
    this._state.isRepeated = !this._state.isRepeated;
    this._removeListeners();
    this._partialUpdate();
    this._addListeners();
  }

  _isRepeated() {
    return Object.values(this._repeatingDays).some((it) => it === true);
  }

  _isDeadline() {
    return (this._dueDate.date !== ` `);
  }

  _partialUpdate() {
    this._element.innerHTML = this.template;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    return `<article class="card card--edit card--${this._color} ${this._state.isRepeated ? `card--repeat` : ``}">
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
            date: <span class="card__date-status">${this._state.isDate ? `yes` : `no`}</span>
          </button>

          <fieldset class="card__date-deadline" ${!this._state.isDate && `disabled`}>
            <label class="card__input-deadline-wrap">
              <input
                class="card__date"
                type="text"
                placeholder="23 September"
                name="date"
                value="${moment(this._dueDate).format(`DD MMMM`)}"
              />
            </label>
            <label class="card__input-deadline-wrap">
              <input
                class="card__time"
                type="text"
                placeholder="11:15 PM"
                name="time"
                value="${moment(this._dueDate).format(`hh:mm A`)}"
              />
            </label>
          </fieldset>

          <button class="card__repeat-toggle" type="button">
            repeat:<span class="card__repeat-status">${this._state.isRepeated ? `yes` : `no`}</span>
          </button>

          <fieldset class="card__repeat-days" ${!this._state.isRepeated && `disabled`}>
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
          ${Array.from(this._tags).map((element) => {
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

  _addListeners() {
    this._cardForm = this._element.querySelector(`.card__form`);
    this._deadlineToggle = this._element.querySelector(`.card__date-deadline-toggle`);
    this._repeatToggle = this._element.querySelector(`.card__repeat-toggle`);
    this._cardForm.addEventListener(`submit`, this._onSubmitButtonClick);
    this._deadlineToggle.addEventListener(`click`, this._onChangeDate);
    this._repeatToggle.addEventListener(`click`, this._onChangeRepeated);

    this._date = flatpickr(this._element.querySelector(`.card__date`), {
      altInput: true,
      altFormat: `j F`,
      dateFormat: `j F`
    });
    this._time = flatpickr(this._element.querySelector(`.card__time`), {
      enableTime: true,
      noCalendar: true,
      altInput: true,
      altFormat: `h:i K`,
      dateFormat: `h:i K`
    });

  }

  _removeListeners() {
    this._cardForm.removeEventListener(`submit`, this._onSubmitButtonClick);
    this._deadlineToggle .removeEventListener(`click`, this._onChangeDate);
    this._repeatToggle .removeEventListener(`click`, this._onChangeRepeated);
    this._cardForm = null;
    this._deadlineToggle = null;
    this._repeatToggle = null;
    this._date.destroy();
    this._time.destroy();
    this._date = null;
    this._time = null;
  }

  update(data) {
    this._title = data.title;
    this._tags = data.tags;
    this._color = data.color;
    this._repeatingDays = data.repeatingDays;
    this._dueDate = data.dueDate;
  }

  static createMapper(target) {
    return {
      hashtag: (value) => target.tags.add(value),
      text: (value) => (target.title = value),
      color: (value) => (target.color = value),
      repeat: (value) => (target.repeatingDays[value] = true),
      date: (value) => (target.dueDate = value),
    };
  }
}
