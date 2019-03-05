import {getRandomItem, getRandomBoolean, getRandomInteger, mixArray} from './utils.js';

const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
const tags = [`homework`, `theory`, `practice`, `intensive`, `keks`, `cinema`, `courses`];
const WEEK_DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];
const titles = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];

export const resultRepeatingDays = WEEK_DAYS.reduce((res, day)=>{
  res[day] = getRandomBoolean();
  return res;
}, {});

tags.sort(mixArray);

const tagsList = tags.slice(0, getRandomInteger(0, 2));

const task = {
  title: getRandomItem(titles),
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: tagsList,
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  color: getRandomItem(colors),
  repeatingDays: resultRepeatingDays,
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean(),
};

export default task;
