import React, { useState, forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Layout from '../common/Layout';
import { ClarendonMatrixImage, CombinedMatrixImage, GinghamMatrixImage, MoonMatrixImage, WarmMatrixImage, imagesFilter } from '../components/Filter';
import {
  grayscale,
  Grayscale,
  sepia,
  tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate
} from 'react-native-color-matrix-image-filters'
import { GrayscaledImage,CoolMatrixImage } from '../components/Filter';

const Save = () => {

 
  const [filteredImage, setFilteredImage] = useState(0);
  console.log(filteredImage);
  return (
    <Layout>
      <Text>Filter</Text>
    
      {/* <Image
      // source={{ uri: image }} 
      source={require('../assets/images/a.jpg')} style={{ width: 300, height: 200, resizeMode: 'center' }} /> */}

{/* 
{filteredImage===0 && <GrayscaledImage source={require('../assets/images/a.jpg')} styles={{ width: 100, height: 100 }}/>}
{filteredImage===1 && <CoolMatrixImage source={require('../assets/images/a.jpg')} styles={{ width: 100, height: 100 }}/>}
{filteredImage===2 && <WarmMatrixImage source={require('../assets/images/a.jpg')} styles={{ width: 100, height: 100 }}/>}
{filteredImage===3 && <ClarendonMatrixImage source={require('../assets/images/a.jpg')} styles={{ width: 100, height: 100 }}/>}
{filteredImage===4 && <GinghamMatrixImage source={require('../assets/images/a.jpg')} styles={{ width: 100, height: 100 }}/>}
{filteredImage===5 && <MoonMatrixImage source={require('../assets/images/a.jpg')} styles={{ width: 100, height: 100 }}/>}
{filteredImage===6 && <CombinedMatrixImage source={require('../assets/images/a.jpg')} styles={{ width: 100, height: 100 }}/>} */}

 <CombinedMatrixImage source={require('../assets/images/a.jpg')} saturateProp={10} />
 <GinghamMatrixImage source={require('../assets/images/a.jpg')} styles={{ width: 100, height: 100 }}/>
      {/* <View style={{ paddingTop: 40 }}>

        <ScrollView horizontal>
          {imagesFilter.map((Value, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => { setFilteredImage(index) }}  styles={{ width: 100, height: 100 }}>
                <Value
                  source={require('../assets/images/a.jpg')}
                 
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View> */}
    </Layout>
  );
};

export default Save;

const styles = StyleSheet.create({});
