import {colors} from './utils';

export const createCardColor = (color) => {
  const colorArray = [];
  for (const key of Object.keys(colors)) {
    colorArray.push(`
      <input
      type="radio"
      id="color-${key}-2"
      class="card__color-input card__color-input--${key} visually-hidden"
      name="color"
      value="${key}"
      ${key === color ? `checked` : ``}
  />
  <label
    for="color-${key}-2"
    class="card__color card__color--${key}"
    >${key}</label>`);
  }
  return colorArray.join(``);
};
