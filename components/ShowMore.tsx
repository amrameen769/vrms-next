'use client'
import {useRouter} from "next/navigation";
import {CustomButton} from "@/components";
import {updateSearchParams} from "@/utils";

interface ShowMorePropTypes {
    pageNumber: number,
    isNext: boolean
}
const ShowMore = ({pageNumber, isNext}: ShowMorePropTypes) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber+1) * 10

        const newPathName = updateSearchParams("limit", `${newLimit}`)

        router.push(newPathName)
    }
    return (
        <div className={"w-full flex-center gap-5 mt-10"}>
            {!isNext && (
                <CustomButton
                    title={"Show More"}
                    type={"button"}
                    containerStyles={"bg-primary-blue rounded-full text-white"}
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};

export default ShowMore;