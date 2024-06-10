import Image from "next/image"
import Badge from "./Badge"

export default function Sidebar() {
    return (
        <aside className="w-3/12 sticky top-0 rounded-lg bg-[#1b1e1e] overflow-hidden">
            <Image
                src="/code.jpg"
                alt="background"
                width="400"
                height="10"
                className="h-24 object-cover"
            />
            <figure className="relative py-10 text-white">
                <Image
                    src="/avatar.jpg"
                    alt="background"
                    width="400"
                    height="10"
                    className="w-16 rounded-full absolute -top-10 -translate-x-1/2 left-1/2"
                />
                <figcaption className="text-center space-y-[2px]">
                    <h1 className="font-medium">Hendri Alqori</h1>
                    <p className="text-[.85rem] text-gray-400">Frontend Developer</p>
                    <p className="text-[.76rem] leading-5 px-[.5rem]">
                        &quot;If you can&apos;t endure the fatigue of studying,
                        then you must be able to endure the pain of ignorance&quot;
                    </p>
                    <p className="text-[.76rem] text-right -translate-x-5 pt-2 text-gray-300">- Imam Syafi&apos;i, RA.</p>
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