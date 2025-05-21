import { View, type ViewProps } from 'react-native'


export type CardViewProps = ViewProps

const CardView = ({ style, ...otherProps }: CardViewProps) => {
    return <View style={[style]} {...otherProps} />
}

export default CardView
