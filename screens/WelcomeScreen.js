import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScreenWrapper } from 'react-native-screen-wrapper'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

//end


export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 relative">
    <StatusBar style='light'/>
    <Image 
      blurRadius={65}
      source={require('../assets/images/bg.png')}
      className="absolute h-full w-full"
    />
    <SafeAreaView>
        <View className="flex-row justify-center flex mt-40">
        <Image
                source={require('../assets/images/WelcomeImage.png')}
                className="w-52 h-52 opacity-50"

            />
            
        </View>
        <View className="flex-row justify-center mt-2">
            <Text className="text-white font-bold text-3xl mb-10">
               <Text className="text-yellow-500"> API</Text> weather
            </Text>
            
        </View>
        <View className="flex-row justify-center mt-2">
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} className="bg-white rounded-full shadow-md p-3 mt-28 opacity-50">
                <Image 
                    source={require('../assets/images/login.png')}
                    className="w-14 h-14"
                />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-28">
            <Text className="text-white font-bold text-xs">ⓒ2023 All right reserved to Arijit</Text>
        </View>
        <View className="flex-row justify-center">
            <Text className="text-white font-bold text-xs">A91404822029</Text>
        </View>
        
    </SafeAreaView>
    
   
    </View>
  )
}