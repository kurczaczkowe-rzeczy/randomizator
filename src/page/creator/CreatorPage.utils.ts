/* eslint-disable */
import {db} from 'config/firebaseConfig';
import _forEach from 'lodash/forEach';

type returnedType = () => void;

export const formsSubscription = (
  userID: string,
  snapshotFunction: (doc: any) => void,
  setFormID?: (formID: any) => void,
): returnedType => db.collection(userID)
  .onSnapshot((snap) => { // ToDo should put this into hook
    if (setFormID) {
      setFormID(snap.docs);
    }
    _forEach(snap.docs, snapshotFunction);
  });

export const fomCollection = async (
  userID: string,
  formID: string
) => {
  try {
    const getFormDate = await db.collection(userID).doc(formID).get();
    return await getFormDate.data();

  } catch (e) {

  }
}

export const getNewFileName = (): string => {
  const date = new Date()
  const datePart = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`
  const timePart = `${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
  return `${datePart}${timePart}`
}
