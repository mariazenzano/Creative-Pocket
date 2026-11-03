import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  name: string;
};

const USER_KEY = "user";

export async function loadUser(): Promise<User | null> {
  const saved = await AsyncStorage.getItem(USER_KEY);

  if (saved === null) {
    return null;
  }

  return JSON.parse(saved);
}

export async function saveUser(user: User) {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
}
