import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewSkeleton from './SkeletonComponents/ViewSkeleton'
import TextSkeleton from './SkeletonComponents/TextSkeleton'

const RecommandedCard = ({ recommdedData, isLoading }) => {
  return (
    <View style={styles.cardContainer}>
      {
        isLoading ?
          <ViewSkeleton width={'100%'} height={190} borderRadius={16} />
          :
          <View style={[styles.imageContainer, { backgroundColor: recommdedData.bgColor }]}>
            <Image style={styles.image} source={recommdedData.icon} />
          </View>
      }
      <View style={styles.textContainer}>
        {
          isLoading ?
            <>
              <TextSkeleton width={'50%'} height={18}  mb={6}/>
              <TextSkeleton width={'100%'} height={18} mb={4}/>
              <TextSkeleton width={'60%'} height={18} />
            </>
            :
            <>
              <Text style={styles.categoryName}>{recommdedData.categoryName}</Text>
              <Text style={styles.description}>{recommdedData.description}</Text>
            </>
        }
      </View>
    </View>
  )
}

export default RecommandedCard

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    padding: 15,
    margin: 10,
    backgroundColor: 'white',
    elevation: 2,
    flex: 1,
    width: 300,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 200
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    marginTop: 10
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    color: 'gray',
    lineHeight: 20, // Adjust line height as needed
    fontWeight: '600'
  },
})
