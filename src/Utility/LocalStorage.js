export const getDatafromLocalstorage = (key) => {
    const saveDataBook = localStorage.getItem(key);//book-read
    if (saveDataBook) {
        return JSON.parse(saveDataBook);
    }
    return [];
}

export const saveDataToLocalstorage = (e,key) => {
    const saveDataBook = getDatafromLocalstorage(key);
    const IdInt = parseInt(e);
    const indentifyID = saveDataBook.find(x => x === IdInt);

    if (!indentifyID) {
        saveDataBook.push(IdInt);
        localStorage.setItem(key, JSON.stringify(saveDataBook));
    }
}

export default { saveDataToLocalstorage, getDatafromLocalstorage };
