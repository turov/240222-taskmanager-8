export const createRepeatingDays = (days) => {
  const daysArray = [];
  for (const key of Object.keys(days)) {
    daysArray.push(`<input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${key}-2"
      name="repeat"
      value="${key}"
      ${days[key] ? `checked` : ``}
      "
    />
    <label class="card__repeat-day" for="repeat-${key}-2"
      >${key}</label
    >`);
  }
  return daysArray.join(``);
};


