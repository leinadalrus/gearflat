import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

import Card from '@/components/Card'
import CardView from '@/components/CardView'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedView } from '@/components/ThemedView'

const HomeScreen = () => {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#fafef9', dark: '#010401' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.logo}
                />
            }
        >
            <ThemedView style={styles.container}>
                <CardView style={styles.cardContainer}>
                    <Card />
                </CardView>
            </ThemedView>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#f1eae4',
        bottom: -90,
        left: -35,
        position: 'absolute'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    container: {
        padding: 2,
        margin: 2,
        gap: 2
    },
    cardContainer: {
        padding: 1,
        margin: 1,
        flex: 1,
        flexWrap: 'wrap',
        gridAutoColumns: '2',
        gap: 1
    },
    logo: {
        height: 24,
        width: 24,
        padding: 4,
        margin: 4,
        bottom: 0,
        left: 0,
        position: 'absolute'
    }
})

export default HomeScreen
