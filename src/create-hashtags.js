export const createTags = (list) => {
  return `<div class="card__hashtag-list">
  ${list.map((element) => {
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
  </div>`;
};
