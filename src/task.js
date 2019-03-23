import Component from './component';

export default class Task extends Component {
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

    this._onEdit = null;
  }

  _isRepeated() {
    return Object.values(this._repeatingDays).some((it) => it);
  }

  _isDeadline() {
    return (this._dueDate.date !== ` `);
  }

  _onEditButtonClick(e) {
    e.preventDefault();
    if (typeof this._onEdit === `function`) {
      this._onEdit();
    }
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `<article class="card card--${this._color} ${this._isRepeated() ? `card--repeat` : ``}">
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
    this._btnEdit = this._element.querySelector(`.card__btn--edit`);
    this._onEditButtonClickBound = this._onEditButtonClick.bind(this);
    this._btnEdit.addEventListener(`click`, this._onEditButtonClickBound);
  }

  _removeListeners() {
    this._btnEdit.removeEventListener(`click`, this._onEditButtonClickBound);
  }

  update(data) {
    this._title = data.title;
    this._tags = data.tags;
    this._color = data.color;
    this._repeatingDays = data.repeatingDays;
  }
}
