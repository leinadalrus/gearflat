import { Image } from 'expo-image'
import { ImageSourcePropType, StyleSheet } from 'react-native'

type Props = {
    imageSource: ImageSourcePropType
}

const ImageViewer = ({ imageSource }: Props) => {
    return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#446eb4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})

export default ImageViewer
