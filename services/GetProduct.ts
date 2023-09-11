import firestore from '@react-native-firebase/firestore';
export const getItem =()=>{
    firestore()
  .collection('auctionItems')
  .get()
  .then(querySnapshot => {
    const auctionItem:any = [];
    querySnapshot.forEach(doc => {
      auctionItem.push({ id: doc.id, product: doc.data() });
    });
    console.log("auctionItem=============",auctionItem);
  });
    // try {
    //   const docRef = firestore().collection("auctionItems");
    //   firestore().onSnapshot(docRef, (querySnapshot:any) => {
    //     const auctionItem:any = [];
    //     console.log("auctionItem=============",auctionItem);
    //     querySnapshot.forEach((doc:any) => {
    //       auctionItem.push({ id: doc.id, product: doc.data() });
    //     })});
    // } catch (e) {
    //   console.log(e, "Error In Api Call GetAuction");
     
    // }
  }