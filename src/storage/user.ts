import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  name: string;
  id: string;
};

type NewUser = {
  name: string;
  id?: string;
};

const USER_KEY = "user";

// Generate a unique-looking user ID
function generateUserId(name: string): string {
  const prefix =
    name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .slice(0, 4) || "user";

  const randomNumber = Math.floor(Math.random() * 900) + 100;

  return `${prefix}_${randomNumber}`;
}

// Load saved user information
export async function loadUser(): Promise<User | null> {
  const saved = await AsyncStorage.getItem(USER_KEY);

  if (saved === null) {
    return null;
  }

  const parsedUser = JSON.parse(saved) as Partial<User>;

  // Generate an ID for users registered before this update
  if (!parsedUser.id && parsedUser.name) {
    const updatedUser: User = {
      name: parsedUser.name,
      id: generateUserId(parsedUser.name),
    };

    await AsyncStorage.setItem(USER_KEY, JSON.stringify(updatedUser));

    return updatedUser;
  }

  return parsedUser as User;
}

// Save user information
export async function saveUser(user: NewUser): Promise<void> {
  const userToSave: User = {
    name: user.name,
    id: user.id || generateUserId(user.name),
  };

  await AsyncStorage.setItem(USER_KEY, JSON.stringify(userToSave));
}
