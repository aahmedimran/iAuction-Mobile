import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    console.log(user);
    const docRef: any = await firestore()
      .collection('users')
      .doc(user.uid)
      .get();
    await AsyncStorage.setItem('userId', user.uid);
    return {...user.providerData, userId: user.uid};
  } catch (error: any) {
    throw error;
  }
};

export const getUserProfile = async (userId: any) => {
  const docRef: any = await firestore().collection('users').doc(userId).get();
  return docRef;
};

export const signupUser = async (
 { firstName,
  lastName,
  email,
  password,}:any
) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    console.log(user.uid);
    await firestore().collection('users').doc(user.uid).set({
      firstName: firstName,
      lastName: lastName,
    });
    return user.uid
  } catch (error: any) {
    throw error;
  }
};


export const updateUserInfo =async(  firstName: string,
  lastName: string,uid:any)=>{


try{
  await firestore().collection('users').doc(uid).update({
    firstName: firstName,
    lastName: lastName,
  });
}catch(e){
  throw e
}

}