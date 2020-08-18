function capitalize(str) {
    if(!str.length){
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

export { capitalize, className };
