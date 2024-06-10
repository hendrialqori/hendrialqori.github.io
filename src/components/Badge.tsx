type Props = {
    children: string
    backgroundColor: string,
    textColor: string
}

export default function Badge({ children, backgroundColor, textColor }: Props) {
    return (
        <div
            style={{ backgroundColor, color: textColor }}
            className="text-xs w-max rounded-md px-2 py-[.1rem]">
            {children}
        </div>
    )
}