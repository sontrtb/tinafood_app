import moment from 'moment';

function getSession() {
  const currentTime = moment();
  if (currentTime.hour() <= 17) {
    return 1;
  } else {
    return 2;
  }
}

export default getSession;
