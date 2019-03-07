export const createRepeatingDays = (days) => {
  const repeatDaysWrapper = document.createElement(`div`);
  repeatDaysWrapper.classList.add(`card__repeat-days-inner`);
  const daysRepeating = days;
  for (let key in daysRepeating) {
    if (daysRepeating.hasOwnProperty(key)) {
      repeatDaysWrapper.innerHTML += `<input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${key}-2"
      name="repeat"
      value="${key}"
      ${daysRepeating[key] ? `checked` : ``}
      "
    />
    <label class="card__repeat-day" for="repeat-${key}-2"
      >${key}</label
    >`;
    }
  }
  return repeatDaysWrapper.outerHTML;
};
