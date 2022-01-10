import { DateTime } from '../node_modules/luxon/src/luxon.js';

const startTime = () => {
  const now = DateTime.now();
  document.getElementById('date').innerHTML = now.toLocaleString(
    DateTime.DATETIME_MED,
  );
  setTimeout(startTime, 1000);
}

export default startTime;
