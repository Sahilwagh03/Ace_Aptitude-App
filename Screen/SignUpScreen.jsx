import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useUserRegistration from '../Hooks/UserAuth/UserRegister'
import SuccessfulModal from '../Components/SuccessfulModal'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUpScreen = () => {

  const [email, setEmail] = useState('Sahil799@gmail.com');
  const [Name, setName] = useState('Sahil');
  const [password, setPassword] = useState('Sahil799@');
  const [confirmpassword, setComfirmpassword] = useState('Sahil779@');
  const [isVisible, setIsVisible] = useState(false)
  const { responseData, error, isLoading, registerUser } = useUserRegistration()


  const handleStoreData = async()=>{
    try {
      await AsyncStorage.setItem('user' , JSON.stringify(responseData.user))
      console.log('Successfully saved')
    } catch (error) {
      console.log("Error" ,error)
    }
  }
  useEffect(() => {
    if (!isLoading && responseData) {
      handleStoreData()
      setIsVisible(true);
    }
  }, [responseData,isLoading]);

  const handleRegister = () => {
    registerUser(Name, email, password, confirmpassword)
  }
  return (
    <SafeAreaView style={{ padding: 20, flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flex: 1, gap: 20, justifyContent: 'center' }}>
          <View >
            <Text style={{ fontSize: 32, fontWeight: '700', textAlign: 'center', color: '#6674CC' }}>Create Account</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', textAlign: 'center', paddingHorizontal: 30 }}>create an account to practice aptitude test</Text>
          </View>
          <View style={{ gap: 20, justifyContent: 'center' }}>
            <TextInput
              style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
              placeholder='Name'
              value={Name}
              onChangeText={setName}
            />
            <TextInput
              style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
              placeholder='Email'
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
              placeholder='Password'
              onChangeText={setPassword}
              value={password}
            />
            <TextInput
              style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
              placeholder='Confirm Password'
              onChangeText={setComfirmpassword}
              value={confirmpassword}
            />
            <TouchableOpacity style={{ backgroundColor: '#6674CC', padding: 15, borderRadius: 15, alignItems: 'center' }}
              onPress={handleRegister}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.paragraphText}>Have an account? <Text style={{ color: '#6674CC' }}>Sign In</Text></Text>
          </View>
        </View>
        <SuccessfulModal visibility={isVisible} />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  paragraphText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#a29ea6',
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600'
  },
})
