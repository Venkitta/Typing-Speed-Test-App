import Image from "next/image"

export const TopHeader = () => {
    return (
        <div className="w-full p-5 flex items-center justify-between mb-3">
            <Image src={'/logo-small.svg'} alt="small-logo" width={35} height={35} priority/>
            <div className="flex gap-2 items-center justify-content">
                <Image src={'/icon-personal-best.svg'} alt="pb-icon" width={25} height={25} style={{ width: 'auto' }}/>
                <div className="text-[hsl(240,1%,59%)] text-xl">Best: </div>
                <div>{/*Here the personal best wpm should appear */}</div>
            </div>
        </div>
    )
}