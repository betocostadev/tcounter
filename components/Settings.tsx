import { useState } from 'react'
import { Text, View } from './Themed'
import Option from './Option'
import { appColors } from '@/constants/Colors'
import { Switch } from './Switch'
import { useColorScheme } from 'nativewind'

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [useHints, setUseHints] = useState(false)
  const { colorScheme, setColorScheme } = useColorScheme()

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light')
  }

  return (
    <View className="flex-1 items-center">
      <Text className="text-xl m-4">Counter Settings</Text>
      <Option>
        <Option.Icon
          icon="dark-mode"
          color={isDarkMode ? appColors.white : appColors.black}
        />
        <Option.Label>Dark mode</Option.Label>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </Option>
      <Option>
        <Option.Icon
          icon="tips-and-updates"
          color={isDarkMode ? appColors.white : appColors.black}
        />
        <Option.Label>Use hints</Option.Label>
        <Switch value={useHints} onValueChange={setUseHints} />
      </Option>
    </View>
  )
}
