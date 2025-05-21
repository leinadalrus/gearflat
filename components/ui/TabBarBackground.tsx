import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BlurView } from 'expo-blur'
import { StyleSheet } from 'react-native'

// This is a shim for web and Android where the tab bar is generally opaque.
export default function TabBarBackground() {
    return (
        <BlurView
            tint="systemUltraThinMaterialLight"
            intensity={99}
            style={StyleSheet.absoluteFill}
        />
    )
}

export function useBottomTabOverflow() {
    return useBottomTabBarHeight()
}
