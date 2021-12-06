const formatDate = (dates: any[]): string => {
  let start = [];
  if (dates[0].month) start.push(dates[0].month);
  if (!dates[1] || dates[1].year !== dates[0].year) start.push(dates[0].year);
  let end = [];
  if (dates[1]) {
    end = [dates[1].month, dates[1].year];
  } else {
    end.push('Present Day');
  }
  return [start, end].map((v) => v.join(' ')).join(' - ');
  // return `${start.join(' ')} - ${end.join(' ')}`;
};

export default formatDate;
