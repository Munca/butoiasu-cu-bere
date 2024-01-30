import {
  doc,
  getFirestore,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { ReservationData } from "../../models/reservation.model";

export const db = getFirestore();

export const createReservation = async (
  data: ReservationData,
  userId: string
) => {
  if (!data) {
    return;
  }
  try {
    await setDoc(doc(db, "reservation", data.id), {
      id: data.id,
      userId: userId,
      name: data.name,
      email: data.email,
      phoneNumber: data.phone,
      date: data.date,
      hour: data.hour,
      guests: data.guests,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getReservations = async (
  userId: string
): Promise<ReservationData[]> => {
  const reservationRef = collection(db, "reservation");
  const userReservationsQuery = query(
    reservationRef,
    where("userId", "==", userId)
    // todo: add index in firebase
    // where("date", ">=", new Date())
  );

  try {
    const querySnapshot = await getDocs(userReservationsQuery);
    const reservations = querySnapshot.docs.map(
      (doc) => doc.data() as ReservationData
    );
    return reservations;
  } catch (error) {
    console.error("Error fetching reservations:", error);
    throw error;
  }
};

export const updateReservation = async (data: ReservationData) => {
  if (!data) {
    return;
  }
  try {
    await updateDoc(doc(db, "reservation", data.id), {
      id: data.id,
      name: data.name,
      date: data.date,
      hour: data.hour,
      guests: data.guests,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteReservation = async (id: string) => {
  console.log("id", id);
  try {
    await deleteDoc(doc(db, "reservation", id));
  } catch (error) {
    console.log(error);
  }
};
