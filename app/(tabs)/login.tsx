import Colors from '@/constants/Colors'
import { Input } from '@/components/Input'
import { View } from '@/components/Themed'
import { useColorScheme } from '@/components/useColorScheme.web'
import { Pressable, ScrollView, Text } from 'react-native'

export default function LoginScreen() {
  const colorScheme = useColorScheme()

  // Adding a ScrollView is creating a bug. Seems like NativeWind is not
  // working, the styles are broken.
  return (
    <View className="flex-1">
      <Text className="text-2xl font-bold self-center my-5 dark:text-white">
        Welcome to TCounter
      </Text>
      <View className="w-full p-5">
        <Input
          className="border-spacing-0 bg-slate-200 dark:bg-slate-600"
          placeholder="Username or Email"
          placeholderTextColor={
            colorScheme === 'dark'
              ? Colors.light.inputLabel
              : Colors.light.inputLabel
          }
        />
        <Input
          className="border-spacing-0 mt-2 bg-slate-200 dark:bg-slate-600"
          placeholder="Password"
          placeholderTextColor={
            colorScheme === 'dark'
              ? Colors.light.inputLabel
              : Colors.light.inputLabel
          }
          secureTextEntry
        />
      </View>
      <View className="w-full">
        <Pressable
          role="button"
          className="w-2/5 p-2 self-center items-center border-2 border-spacing-0 bg-blue-400 border-blue-300 rounded-lg"
        >
          <Text className="text-white font-bold">Login</Text>
        </Pressable>
        <Text className="text-center mt-5 dark:text-white">
          Don't have an account? Sign up
        </Text>
        <Pressable
          role="button"
          className="w-2/5 p-2 mt-4 self-center items-center border-2 border-spacing-0 bg-slate-500 border-slate-400 rounded-lg"
        >
          <Text className="text-white font-bold">Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}
