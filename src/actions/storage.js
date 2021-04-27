import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(value) {
    try {
        let data = [];
        let ExData = await getData();
        if (ExData !== null && ExData !== undefined) {
            data = ExData;
            data.push(value);
            await AsyncStorage.setItem('favLIST', JSON.stringify(data))
        }
        else {
            data.push(value);
            await AsyncStorage.setItem('favLIST', JSON.stringify(data))
        }

    } catch (e) {
        console.log(e)
        return e;
    }
}

export async function removeData(id) {
    try {
        let data = [];
        let ExData = await getData();
        if (ExData !== null && ExData !== undefined) {
            data = ExData;
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    data.pop(i)
                }
            }
            await AsyncStorage.setItem('favLIST', JSON.stringify(data))
        }
    } catch (e) {
        console.log(e)
        return e;
    }
}

export async function getData() {
    try {
        const value = await AsyncStorage.getItem('favLIST')
        if (value !== null) {

            let data = await JSON.parse(value);
            return data;
        }
        else {
            return []
        }
    } catch (e) {

        console.log(e)
        return e;
    }
}

export async function isFav(id) {
    let favLIST = await getData();
    for (let i = 0; i < favLIST.length; i++) {
        if (favLIST[i].id == id) {
            return true
        }
    }
    return false;
}

export async function toggleFav(id, item) {
    let isFavT = await isFav(id);
    if (isFavT) {
        await removeData(id);
    }
    else {
        await saveData({ id: id, item: item });
    }
}