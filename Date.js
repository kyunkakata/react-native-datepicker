type formatTypeProp = 'YYYY-MM-DD'| 'YYYY-MM-DD HH:mm'|'HH:mm';


export function format(date:Date, formatType:formatTypeProp):String {
  if (formatType === 'YYYY-MM-DD') {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }
  else if (formatType === 'YYYY-MM-DD HH:mm') {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
  }
  else if (formatType === 'HH:mm') {
    return date.getHours() + ':' + date.getMinutes();
  }
}

export function getTimeFromFormatString(dateStr:String, formatType:formatTypeProp):Date {
  if (formatType === 'YYYY-MM-DD' || formatType === 'YYYY-MM-DD HH:mm'){
    return new Date(dateStr);
  }
  else if (formatType === 'HH:mm') {
    let date = new Date();
    let arrayTime = dateStr.split(/\W/);
    let hour = Number(arrayTime[0]);
    let min = Number(arrayTime[1]);
    date.setHours(hour);
    date.setMinutes(min);
    return date;
  }
  return new Date(dateStr);
}

export function get(hour:String|Number, min:String|Number):Date {
  let date = new Date();
  date.setHours(hour);
  date.setMinutes(min);
  return date;
}
