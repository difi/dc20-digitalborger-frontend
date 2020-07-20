import * as SecureStore from 'expo-secure-store';

export const storeData = async (key: string, data: any) => {
    try {
        await SecureStore.setItemAsync(key, data);
    } catch (error) {
        throw new Error(error);
    }
};
export const removeData = async (key: string) => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        throw new Error(error);
    }
};
export const retrieveData = async (key: string) => {
    try {
        const value = await SecureStore.getItemAsync(key);
        return value;
    } catch (error) {
        return null;
    }
};
