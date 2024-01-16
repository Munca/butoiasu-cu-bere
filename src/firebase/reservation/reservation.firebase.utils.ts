import { doc, getFirestore, setDoc, where, query, collection, getDocs, queryEqual } from "firebase/firestore";
import { ReservationData } from "../../models/reservation.model";
import { v4 as uuid } from "uuid";
export const db = getFirestore();

export const createReservation = async (data: ReservationData, userId: string) => {

  if (!data) {
    return;
  }
    try {
      const id = uuid();
      await setDoc(doc(db, 'reservation', userId), {
        id: id, 
        userId: userId,
        name: data.name,
        email: data.email,
        phoneNumber: data.phone,
        data: data.date,
        hour: data.hour,
        guests: data.guests,
      });
    } catch (error) {
      console.log(error);
    }
 
};

export const getReservations = async(userId : string)=>{

  const reservationRef = collection(db, "reservation");
  const q = query(reservationRef, where("userId", "==", userId));
//todo filter userId reservations
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc)=> console.log(doc.data()))
  // if(docSnap){
  //   console.log(docSnap.)
  // }
}