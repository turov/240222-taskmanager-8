import {colors} from './utils';

export const createCardColor = () => {
  const cardColorsWrap = document.createElement(`div`);
  cardColorsWrap.classList.add(`card__colors-wrap`);
  for (let color in colors) {
    if (colors.hasOwnProperty(color)) {
      cardColorsWrap.innerHTML += `
      <input
      type="radio"
      id="color-${color}-2"
      class="card__color-input card__color-input--${color} visually-hidden"
      name="color"
      value="${color}"
  />
  <label
    for="color-${color}-2"
    class="card__color card__color--${color}"
    >${color}</label>`;
    }
  }
  return cardColorsWrap.outerHTML;
};
