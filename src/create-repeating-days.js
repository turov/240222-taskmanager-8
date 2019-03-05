export {resultRepeatingDays} from './data';

export default (resultRepeatingDays) => {
  const repeatDaysWrapper = document.createElement(`div`);
  repeatDaysWrapper.classList.add(`card__repeat-days-inner`);
  for (let key in resultRepeatingDays) {
    if (resultRepeatingDays.hasOwnProperty(key)) {
      repeatDaysWrapper.innerHTML = `<input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${key}-2"
      name="repeat"
      value="${key}"
      checked = "${resultRepeatingDays[key]}"
    />
    <label class="card__repeat-day" for="repeat-${key}-2"
      >${key}</label
    >`;
    }
  }
  return repeatDaysWrapper;
};

