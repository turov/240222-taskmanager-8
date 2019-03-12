import {getRandomItem, getRandomBoolean, getRandomInteger, mixArray} from './utils.js';

const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
const tags = [`homework`, `theory`, `practice`, `intensive`, `keks`, `cinema`, `courses`];
const titles = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const WEEK_DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

const getRepeatingDays = () => {
  const resultRepeatingDays = WEEK_DAYS.reduce((res, day)=>{
    res[day] = getRandomBoolean();
    return res;
  }, {});
  return resultRepeatingDays;
};

const getTags = () => {
  tags.sort(mixArray);
  let tagsList = tags.slice(0, getRandomInteger(0, 3));
  return tagsList;
};

const getPicture = () => {
  return `http://picsum.photos/100/100?r=${Math.random()}`;
};

const getTaskDate = () => {
  let dateObj = {};
  let date = new Date();
  date.setTime(Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000);
  date = date.toString().split(` `);
  dateObj.date = date[2] + ` ` + date[1];
  dateObj.time = date[4].split(`:`).splice(0, 2).join(`:`);
  return dateObj;
};

export const generateTask = () => {
  const task = {
    title: getRandomItem(titles),
    dueDate: getTaskDate(),
    tags: getTags(),
    picture: getPicture(),
    color: getRandomItem(colors),
    repeatingDays: getRepeatingDays(),
    isFavorite: getRandomBoolean(),
    isDone: getRandomBoolean(),
  };
  return task;
};
