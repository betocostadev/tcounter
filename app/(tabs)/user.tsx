import { Text, View } from '@/components/Themed'

export default function UserScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">User</Text>
      <View
        className="my-8 h-0.5 w-4/5"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  )
}
