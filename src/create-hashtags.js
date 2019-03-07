import {generateTask} from './data';

export default () => {
  const hashtagList = document.createElement(`div`);
  hashtagList.classList.add(`card__hashtag-list`);
  generateTask().tags.forEach((element) => {
    hashtagList.innerHTML += `<span class="card__hashtag-inner">
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
  });
  return hashtagList.outerHTML;
};
