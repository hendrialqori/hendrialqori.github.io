import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="w-max text-white ml-auto mr-0 flex gap-2">
            <Link href="/about">
                <div className="bg-[#222831] px-3 py-[.3rem] rounded-2xl text-[.75rem]">
                    About me
                </div>
            </Link>
            <Link href="/blog">
                <div className="bg-[#222831] px-3 py-[.3rem] rounded-2xl text-[.75rem]">
                    Blog
                </div>
            </Link>
            <Link href="/portfolio">
                <div className="bg-[#222831] px-3 py-[.3rem] rounded-2xl text-[.75rem]">
                    Porfolio
                </div>
            </Link>
            <Link href="/certificate">
                <div className="bg-[#222831] px-3 py-[.3rem] rounded-2xl text-[.75rem]">
                    Certificate
                </div>
            </Link>
        </nav>
    )
}