export function formatDate(date) {
  var todayTime = new Date(date);
  var month = todayTime.getMonth();
  if (month < 10) month = '0' + month
  var day = todayTime.getDate();
  if (day < 10) day = '0' + day
  var year = todayTime.getFullYear();
  return day + "-" + month + "-" + year;
}