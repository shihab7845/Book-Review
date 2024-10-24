export const getDatafromLocalstorage = () => {
    const saveDataBook = localStorage.getItem("book-read");
    if (saveDataBook) {
        return JSON.parse(saveDataBook);
    }
    return [];
}

export const saveDataToLocalstorage = (e) => {
    const saveDataBook = getDatafromLocalstorage();
    const IdInt = parseInt(e);
    const indentifyID = saveDataBook.find(x => x === IdInt);

    if (!indentifyID) {
        saveDataBook.push(IdInt);
        localStorage.setItem("book-read", JSON.stringify(saveDataBook));
    }
}

export default { saveDataToLocalstorage, getDatafromLocalstorage };
