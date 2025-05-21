import { ViewProps } from 'react-native'

export type AlbumArtProps = ViewProps & {
    title?: string
    genre?: string
    category?: string
}

const AlbumArt = ({
    title,
    genre,
    category,
    style,
    ...otherProps
}: AlbumArtProps) => {
    return (
        <article className="max-w-sm max-h-md rounded-b rounded-md shadow-lg text-[#0e020c] bg-[#f1eae4]">
            <section className="px-4 py-2">
                <h1>{title}</h1>
            </section>

            <img src="" alt="" className="w-12 rounded rounded-sm" />

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-[#446a4b] rounded-full px-2 py-1 text-sm text-[#f1eae4] mr-2 mb-2">
                    {genre}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm text-[#0e020c] mr-2 mb-2">
                    {category}
                </span>
            </div>
        </article>
    )
}

export default AlbumArt
