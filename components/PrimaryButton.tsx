import { FontAwesome } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type Props = {
    label: string
}

const PrimaryButton = ({ label }: Props) => {
    return (
        <View>
            <Pressable style={styles.buttonItem}>
                <FontAwesome
                    name="picture-o"
                    size={18}
                    color={'#f1eae4'}
                    style={styles.buttonIcon}
                />
                <Text style={styles.text}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#446eb4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#f1eae4',
        fontSize: 20
    },
    buttonItem: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonIcon: {
        padding: 4
    }
})

export default PrimaryButton
