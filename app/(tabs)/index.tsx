import { Button } from '@/components/Button'
import { Text, View } from '@/components/Themed'
import { useColorScheme } from 'nativewind'

export default function TabOneScreen() {
  const { colorScheme, setColorScheme } = useColorScheme()
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">Tab One</Text>
      <View
        className="my-8 h-0.5 w-4/5"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text className="text-lg mx-3">
        Change the color scheme by clicking the button below.
      </Text>
      <Button
        label="Change theme"
        labelClasses="text-white"
        className="my-4"
        size="lg"
        onPress={() =>
          setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
        }
      />
      <Text className="text-lg mb-5">
        {`The color scheme is set to ${colorScheme}`}
      </Text>
    </View>
  )
}
