import { View, type ViewProps } from 'react-native'

export type AlbumViewProps = ViewProps

const AlbumView = ({ style, ...otherProps }: AlbumViewProps) => {
    return <View style={[style]} {...otherProps} />
}

export default AlbumView
