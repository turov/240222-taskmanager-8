export const board = document.body.querySelector(`.board__tasks`);
export const mainFilter = document.querySelector(`.main__filter`);

export const getRandomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

export const FILTER_PROPS = [{
  name: `all`,
  count: getRandomInteger(0, 1000),
  checked: `checked`,
  disabled: ``
},
{
  name: `overdue`,
  checked: ``,
  disabled: `disabled`
},
{
  name: `today`,
  checked: ``,
  disabled: `disabled`
},
{
  name: `favorites`,
  count: getRandomInteger(0, 1000),
  checked: ``,
  disabled: ``
},
{
  name: `repeating`,
  count: getRandomInteger(0, 1000),
  checked: ``,
  disabled: ``
},
{
  name: `tags`,
  count: getRandomInteger(0, 1000),
  checked: ``,
  disabled: ``
},
{
  name: `archive`,
  count: getRandomInteger(0, 1000),
  checked: ``,
  disabled: ``
}
];
