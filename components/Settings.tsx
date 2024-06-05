import { useState } from 'react'
import { Text, View } from './Themed'
import Option from './Option'
import { appColors } from '@/constants/Colors'

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl">Settings</Text>
      <Option
        name="darkMode"
        value={isDarkMode ? 'on' : 'off'}
        onChange={() => setIsDarkMode(!isDarkMode)}
      >
        <Option.Icon
          icon="dark-mode"
          color={isDarkMode ? appColors.white : appColors.white}
        />
        <Option.Label>Dark mode</Option.Label>
      </Option>
    </View>
  )
}
