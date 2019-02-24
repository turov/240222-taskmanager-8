export default (name, count = 0, isChecked, isDisabled) => {
  const filter = document.createElement(`div`);
  filter.innerHTML = `<input
  type="radio"
  id="filter__${name}"
  class="filter__input visually-hidden"
  name="filter"
  ${isChecked ? `checked` : ``}
  ${isDisabled ? `disabled` : ``}
/>
<label for=filter__${name} class="filter__label"
  >${name} <span class="filter__${name}-count">${count}</span></label
>`;
  return filter;
};
