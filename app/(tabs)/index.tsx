import { Text, View } from '@/components/Themed'
import { useColorScheme } from 'nativewind'

export default function MainScreen() {
  const { colorScheme } = useColorScheme()
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">Home</Text>
      <View
        className="my-8 h-0.5 w-4/5"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text className="text-lg mx-3">Welcome to TCounter</Text>

      <Text className="text-lg mb-5">
        {`The color scheme is set to ${colorScheme}`}
      </Text>
    </View>
  )
}
