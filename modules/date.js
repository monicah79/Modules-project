import { DateTime } from './luxon.js';

const dateFunction = () => {
  const date = document.querySelector('.time');
  const myDate = DateTime.now();

  const dateString = myDate.toLocaleString(DateTime.DATETIME_MED);
  date.innerHTML = dateString;
};
export default dateFunction;