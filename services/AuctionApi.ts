import firestore from '@react-native-firebase/firestore';
import {AuctionItem} from '../store/slicer/GetAuction';
export const getAuctionItemProductData = async () => {
  try {
    const querySnapshot = await firestore().collection('auctionItems').get();
    const auctionItem: AuctionItem[] = [];
    querySnapshot.forEach((doc: any) => {
      auctionItem.push({id: doc.id, product: doc.data()});
    });
    return auctionItem;
  } catch (error) {
    console.log(error);
  }
};

export const updateAuctionItemProductData =  () => {
 firestore()
    .collection('user')
    .doc('ABC')
    .update({
      age: 31,
    })
    .then(() => {
      console.log('User updated!');
    })
    .catch(e => {
      console.log(e, 'error');
    });
};
