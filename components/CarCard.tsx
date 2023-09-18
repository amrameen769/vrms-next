'use client'
import Image from "next/image";
import {useState} from "react";
import {CarProps} from "@/types";
import {calculateCarRent, generateCarImageUrl} from "@/utils";
import {CustomButton, CarDetails} from "@/components";

interface CarCardPropTypes {
    car: CarProps
}
const CarCard = ({car}: CarCardPropTypes) => {
    const { city_mpg, year, make, model, transmission, drive  }: CarProps = car

    const carRent = calculateCarRent(city_mpg, year);
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={"car-card group"}>
            <div className={"car-card__content"}>
                <h2 className={"car-card__content-title"}>
                    {make} {model}
                </h2>
            </div>

            <p className={"flex mt-6 text-[32px]"}>
                <span className={"self-start text-[14px]"}>
                $
                </span>
                    {carRent}
                <span className={"self-end text-[14px]"}>
                    /day
                </span>
            </p>
            <div className={"relative w-full h-40 my-3 object-contain"}>
                <Image
                    src={generateCarImageUrl(car)}
                    alt={"car-image"}
                    fill
                    priority
                    className={"object-contain"}
                />
            </div>
            <div className={"relative flex w-full mt-2"}>
                <div className={"flex group-hover:invisible w-full justify-between text-gray"}>
                    <div className={"flex flex-col justify-center items-center gap-2 h-10 w-10"}>
                        <Image
                            src={"/steering-wheel.svg"}
                            width={20}
                            height={20}
                            alt={"steering-wheel"}
                        />
                        <p className={"text-[14px]"}>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className={"flex flex-col justify-center items-center gap-2 h-10 w-10"}>
                        <Image
                            src={"/tyre.svg"}
                            width={20}
                            height={20}
                            alt={"tyre"}
                        />
                        <p className={"text-[14px]"}>
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className={"flex flex-col justify-center items-center gap-2 h-10 w-10"}>
                        <Image
                            src={"/gas.svg"}
                            width={20}
                            height={20}
                            alt={"mileage"}
                        />
                        <p className={"text-[14px]"}>
                            {city_mpg}
                        </p>
                    </div>
                </div>
                <div className={"car-card__btn-container"}>
                    <CustomButton
                        title={"View more"}
                        containerStyles={"w-full py-[16px] rounded-full bg-primary-blue"}
                        textStyles={"text-white text-[14px] leading-[17px] font-bold"}
                        rightIcon={"/right-arrow.svg"}
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCard;