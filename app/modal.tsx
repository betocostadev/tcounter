import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import { Text, View } from '@/components/Themed'

export default function ModalScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl">Modal</Text>
      <View
        className="my-8 h-0.5 w-4/5"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}
