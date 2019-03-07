import {generateTask} from './data';

export default () => {
  const repeatDaysWrapper = document.createElement(`div`);
  repeatDaysWrapper.classList.add(`card__repeat-days-inner`);
  for (let key in generateTask().repeatingDays) {
    if (generateTask().repeatingDays.hasOwnProperty(key)) {
      repeatDaysWrapper.innerHTML += `<input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${key}-2"
      name="repeat"
      value="${key}"
      ${generateTask().repeatingDays[key] ? `checked` : ``}
      "
    />
    <label class="card__repeat-day" for="repeat-${key}-2"
      >${key}</label
    >`;
    }
  }
  return repeatDaysWrapper.outerHTML;
};

