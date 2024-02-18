import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Menu } from "../../models/menu.model";

export const db = getFirestore();

export const getMenu = async (): Promise<Menu[]> => {
  const menuRef = collection(db, "menu_v2");
  const menuQuery = query(menuRef);

  try {
    const querySnapshot = await getDocs(menuQuery);
    const menuObjects = querySnapshot.docs.map((doc) => doc.data() as Menu);
    return menuObjects;
  } catch (error) {
    console.error("Error fetching reservations:", error);
    throw error;
  }
};

export const getMenuItemById = async (
  id: string | undefined
): Promise<Menu | undefined> => {
  const menuRef = collection(db, "menu_v2");
  const menuQuery = query(menuRef, where("id", "==", id));

  try {
    const querySnapshot = await getDocs(menuQuery);
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return undefined;
    }
    const menuItemDoc = querySnapshot.docs[0];
    const menuItemData = menuItemDoc.data() as Menu;
    return menuItemData;
  } catch (error) {
    console.error("Error fetching reservations:", error);
    throw error;
  }
};
