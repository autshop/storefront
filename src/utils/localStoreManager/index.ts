export enum LocalStorageKeys {
    CART = "CART",
    ORDER_TOKEN = "ORDER_TOKEN"
}

const getLocalStorage = () => {
    if (!!window && !!window.localStorage) {
        return window.localStorage;
    }
    return null;
};

const set = (localStorageKey: LocalStorageKeys, value: string) => {
    const ls = getLocalStorage();
    if (ls) {
        ls.setItem(localStorageKey, value);
    }
};

const get = (localStorageKey: LocalStorageKeys) => {
    const ls = getLocalStorage();
    if (ls) {
        return ls.getItem(localStorageKey);
    }
};

const LocalStorageManager = {
    set,
    get
};

export default LocalStorageManager;
