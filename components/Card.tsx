import { ViewProps } from 'react-native'

export type CardProps = ViewProps & {
    title?: string
    author?: string
    group?: string
    content?: string
    flavour?: string
    image?: string
    tags?: string[]
}

const Card = ({
    title,
    content,
    flavour,
    tags,
    style,
    ...otherProps
}: CardProps) => {
    return (
        <article className="max-w-sm max-h-md rounded-b rounded-md shadow-lg text-[#0e020c] bg-[#f1eae4]">
            <section className="px-4 py-2">
                <h1>{title}</h1>
            </section>

            <img src="" alt="" className="w-12 rounded rounded-sm" />

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-[#446a4b] rounded-full px-2 py-1 text-sm text-[#f1eae4] mr-2 mb-2">
                    {tags}
                </span>
            </div>
            <section className="px-6 py-4">
                <p className="font-medium text-md mb-2">{content}</p>
                <i className="text-base">{flavour}</i>
            </section>
        </article>
    )
}

export default Card
