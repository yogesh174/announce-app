export default function calendar(date, text) {
  let url = new URL('https://calendar.google.com/calendar/render');
  let params = {action: "TEMPLATE"};

  let parseDate = Number(date.replace(/\-/g, ""))
  let dates = `${parseDate}/${parseDate+1}`;
  params = {...params, dates, text}

  url.search = new URLSearchParams({...params}).toString().replace("%2F", "/");
  return url.toString();
}