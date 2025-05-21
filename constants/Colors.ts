/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4'
const tintColorDark = '#f1eae4'

export const Colors = {
    light: {
        text: '#ob1f06',
        background: '#fafef9',
        tint: tintColorLight,
        icon: '#8a152c',
        tabIconDefault: '#192716',
        tabIconSelected: tintColorLight
    },
    dark: {
        text: '#e6f9e1',
        background: '#010401',
        tint: tintColorDark,
        icon: '#ea758d',
        tabIconDefault: '#dbe9d8',
        tabIconSelected: tintColorDark
    }
}
