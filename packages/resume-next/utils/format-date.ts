import type { ResumeDate } from '../resume-types';

const formatDate = ([startDate, endDate]: ResumeDate[]): string => {
  const start = [];
  const end = [];
  let returnSingleDate = false;
  if (
    endDate &&
    startDate.month === endDate.month &&
    startDate.year === endDate.year
  ) {
    returnSingleDate = true;
  }
  if (startDate.month) {
    start.push(startDate.month);
  }
  if (!endDate || startDate.year !== endDate.year) {
    start.push(startDate.year);
  }
  if (endDate) {
    end.push(endDate.month, endDate.year);
  } else {
    end.push('Present Day');
  }
  const dateGap = [start, end].map((value) => value.join(' '));
  if (returnSingleDate) return dateGap[1];
  if (dateGap[0] === dateGap[1]) return dateGap[0];
  return dateGap.join(' - ');
};

export default formatDate;
