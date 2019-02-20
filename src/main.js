'use strict';

const page = document.body;

function renderFilter (
  identifier = `testid`, name = `testname`, element = `testelem`, count = `0`, isChecked,isDisabled) {
  const filter = document.createElement(`div`);
  filter.innerHTML = `<input
  type="radio"
  id=${identifier}"
  class="filter__input visually-hidden"
  name="filter"
  ${isChecked ? "checked" : ""}
  ${isDisabled ? "disabled" : ""}
/>
<label for=${identifier} class="filter__label"
  >${name} <span class="filter__${element}">${count}</span></label
>`
document.body.appendChild(filter);
};

renderFilter(`filter__custom`, `filter-name`, `custom-counts`, `17`, `checked`);
