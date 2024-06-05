import { Text, View } from './Themed'
import { TextProps } from './Themed'
import { MaterialIcons } from '@expo/vector-icons'

interface OptionProps {
  children: React.ReactNode
}

interface IconProps {
  icon: keyof typeof MaterialIcons.glyphMap
  color: string
}

export default function Option({ children }: OptionProps) {
  return (
    <View className="w-full flex-row items-center gap-2 px-4 py-2 border-b border-gray-200">
      {children}
    </View>
  )
}

function Icon({ icon, color }: IconProps) {
  return <MaterialIcons name={icon} size={24} color={color} />
}

function Label({ ...rest }: TextProps) {
  return <Text className="text-lg flex-1" {...rest} />
}

Option.Icon = Icon
Option.Label = Label

export { Option }
