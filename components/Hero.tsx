'use client'
import Image from "next/image";

const Hero = () => {
    return (
        <div className={"hero"}>
            <div className={"flex-1 pt-36 padding-x"}>
                <h1 className={"hero__title text-white"}>find, book, or rent a car -- quickly and easily!</h1>
                <p className={"hero__subtitle"}>
                    streamline your car rental experience with our effortless booking process
                </p>
            </div>
            <div className={"absolute -z-10 h-full w-full"}>
                <Image
                    src={"/vrms-background.jpg"}
                    alt={"hero"}
                    fill
                    className={"object-cover"}
                />
                <div className={"w-full h-full bg-black bg-opacity-50 absolute"}></div>
            </div>
            {/*<div className={"hero__image-container"}>*/}
            {/*    <div className={"hero__image"}>*/}
            {/*        <Image*/}
            {/*            src={"/vrms-background.jpg"}*/}
            {/*            alt={"hero"}*/}
            {/*            fill*/}
            {/*            className={"object-cover"}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Hero
