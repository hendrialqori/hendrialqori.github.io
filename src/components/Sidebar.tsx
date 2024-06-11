import Image from "next/image"
import Badge from "./Badge"

export default function Sidebar() {
    return (
        <aside className="w-3/12 sticky top-10 rounded-lg bg-[#202021] overflow-hidden h-max">
            <Image
                src="/code.jpg"
                alt="background"
                width="400"
                height="10"
                className="h-20 object-cover"
            />
            <figure className="relative py-10 text-white">
                <Image
                    src="/avatar.jpg"
                    alt="background"
                    width="400"
                    height="10"
                    className="w-16 rounded-full absolute -top-10 -translate-x-1/2 left-1/2"
                />
                <figcaption className="text-center space-y-[1px]">
                    <h1 className="font-medium">Hendri Alqori</h1>
                    <p className="text-[.85rem] text-gray-400">Frontend Developer</p>
                    <p className="text-[.76rem] leading-4 px-[.5rem] pt-3">
                        A creative developer known for my critical thinking and
                        logical approach, interested in web dan mobile development
                        expecially javascript environment.
                    </p>
                </figcaption>
                <div className="border-gray-600 px-3 flex gap-1 justify-center flex-wrap mt-4">
                    <Badge textColor="black" backgroundColor="#F7DF1E">
                        Javascript
                    </Badge>
                    <Badge textColor="white" backgroundColor="#007ACC">
                        Typescript
                    </Badge>
                    <Badge textColor="white" backgroundColor="#339933">
                        NodeJS
                    </Badge>
                    <Badge textColor="black" backgroundColor="#61DAFB">
                        React
                    </Badge>
                    <Badge textColor="white" backgroundColor="black">
                        Next
                    </Badge>
                    <Badge textColor="white" backgroundColor="#42b883">
                        Vue
                    </Badge>
                    <Badge textColor="black" backgroundColor="white">
                        Express
                    </Badge>
                    <Badge textColor="black" backgroundColor="#8DD6F9">
                        Webpack
                    </Badge>
                    <Badge textColor="white" backgroundColor="#ACD268">
                        Vitest
                    </Badge>
                </div>
            </figure>
        </aside>
    )
}