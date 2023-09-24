import { ToastAndroid } from "react-native";

export const showToast = (title:string) => {
    ToastAndroid.show(title, ToastAndroid.SHORT);
  };
  
 export const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;