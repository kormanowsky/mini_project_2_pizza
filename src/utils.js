import moment from "./moment";

function capitalize(str) {
  if (!str.length) {
    return "";
  }
  return str.replace(str[0], str[0].toUpperCase());
}

function className(names) {
  return Object.keys(names)
    .filter((key) => names[key])
    .map((key) => key.replace(/([A-Z])/g, (found) => `-${found.toLowerCase()}`))
    .join(" ");
}

function humanDate(date) {
  return moment(date).format("D MMMM Y года в H:m");
}

export { capitalize, className, humanDate };
