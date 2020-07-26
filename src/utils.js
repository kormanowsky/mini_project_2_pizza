function capitalize(str) {
    if(!str.length){
        return "";
    }
    return str.replace(str[0], str[0].toUpperCase());
}

export { capitalize };
