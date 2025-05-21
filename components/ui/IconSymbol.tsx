// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { SymbolViewProps, SymbolWeight } from 'expo-symbols'
import { ComponentProps } from 'react'
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native'

type IconMapping = Record<
    SymbolViewProps['name'],
    ComponentProps<typeof MaterialIcons>['name']
>
type IconSymbolName = keyof typeof MAPPING

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
    'fish.fill': 'set-meal',
    'house.lodge.fill': 'houseboat',
    'rectangle.dock': 'dashboard',
    'rectangle.grid.1x2.fill': 'space-dashboard',
    'rectangle.3.group': 'groups-3',
    'rectangle.3.group.bubble.left': 'auto-awesome-mosaic',
    'rectangle.stack.fill': 'web-stories',
    'star.square.fill': 'assistant',
    'square.righthalf.fill': 'microwave',
    'square.on.square': 'bento',
    'square.on.square.dashed': 'art-track',
    'squareshape.split.2x2': 'interests',
    'chevron.left.forwardslash.chevron.right': 'code',
    'chevron.right': 'chevron-right'
} as IconMapping

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
    name,
    size = 24,
    color,
    style
}: {
    name: IconSymbolName
    size?: number
    color: string | OpaqueColorValue
    style?: StyleProp<TextStyle>
    weight?: SymbolWeight
}) {
    return (
        <MaterialIcons
            color={color}
            size={size}
            name={MAPPING[name]}
            style={style}
        />
    )
}
