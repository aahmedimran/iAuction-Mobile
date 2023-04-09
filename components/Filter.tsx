//@ts-nocheck
import {
  grayscale,
  Grayscale,
  sepia,
  tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate,
  brightness,
  Contrast,
  temperature,
  cool, 
  colorTone,
  technicolor,
} from 'react-native-color-matrix-image-filters'
import { Image, StyleSheet, Text } from 'react-native'
import { warm } from 'react-native-image-filter-kit'


export const GrayscaledImage = (imageProps: any) => (
  <Grayscale style={styles.Containerimage}>
    <Image {...imageProps} style={styles.image} />
    <Text style={styles.name}>GrayscaledImage</Text>

  </Grayscale>
)

export const CombinedFiltersImage = (imageProps: any) => (
  <ColorMatrix matrix={concatColorMatrices(tint(1.25), sepia())} style={styles.Containerimage}>
    <Image {...imageProps} style={styles.image} />
    <Text style={styles.name}>CombinedFiltersImage</Text>
  </ColorMatrix>
)

// Cool Filter
export const CoolMatrixImage = (imageProps: any) => (
  <ColorMatrix matrix={concatColorMatrices(saturate(1.5), grayscale(0.5))} style={styles.Containerimage}>
    <Image {...imageProps} style={styles.image} />
    <Text style={styles.name}>CoolMatrixImage</Text>

  </ColorMatrix>
)
// Warm Filter

export const WarmMatrixImage = (imageProps: any) => (
  <ColorMatrix matrix={concatColorMatrices(saturate(0.5),)} style={styles.Containerimage}>
    <Image {...imageProps} style={styles.image} />
    <Text style={styles.name}>WarmMatrixImage</Text>

  </ColorMatrix>
)

// Clarendon
export const ClarendonMatrixImage = (imageProps: any) => (
  <ColorMatrix matrix={concatColorMatrices(saturate(1.5))} style={styles.Containerimage}>
    <Image {...imageProps} style={styles.image} />
    <Text style={styles.ClarendonMatrixImage}>WarmMatrixImage</Text>

  </ColorMatrix>
)
// Combined Filter
export const CombinedMatrixImage = (imageProps,{saturateProp}) => {
  console.log(imageProps);

  return(
  
  <ColorMatrix matrix={concatColorMatrices(saturate(saturateProp))}>
    
    <Image {...imageProps} style={{width:400,height:300,resizeMode:'center',}}  />
    <Text style={styles.ClarendonMatrixImage}>CombinedMatrixImage</Text>

  </ColorMatrix>
)}
// Gingham Filter
export const GinghamMatrixImage = (imageProps: any) => (
  <ColorMatrix matrix={concatColorMatrices(saturate(2), sepia(0.5))} style={styles.Containerimage}>
    <Image {...imageProps} style={styles.image} />
    <Text style={styles.ClarendonMatrixImage}>GinghamMatrixImage</Text>

  </ColorMatrix>
)
// Moon Filter
export const MoonMatrixImage = (imageProps: any) => (
  <ColorMatrix matrix={concatColorMatrices(saturate(2), sepia(0.5), grayscale(4))} style={styles.Containerimage}>

    <Image {...imageProps} style={styles.image} />
    <Text style={styles.ClarendonMatrixImage}>MoonMatrixImage</Text>
  </ColorMatrix>
)


// const ColorMatrixImage = (imageProps:any) => (

//   <ColorMatrix matrix={concatColorMatrices(saturate(2),sepia(0.5),grayscale(4),contrast(2),)}>
//       <Image {...imageProps} />
//     </ColorMatrix>
//   )

export const imagesFilter = [
  GrayscaledImage,
  CoolMatrixImage,
  WarmMatrixImage,
  ClarendonMatrixImage,
  GinghamMatrixImage,
  MoonMatrixImage,
  CombinedMatrixImage,
]
const styles = StyleSheet.create({
  Containerimage: {
    // borderWidth:2,
    // height:200,
    // width:200,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'center'
  }
});