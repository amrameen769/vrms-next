'use client'
import {SearchManufacturer} from "@/components";
import React, {useState} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

const SearchButton = ({customStyles}: { customStyles?: string }) => (
    <button type={"submit"} className={`-ml-11 z-10 ${customStyles}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={"search"}
            width={40}
            height={40}
            className={"object-contain"}
        />
    </button>
)

function SearchBar() {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter()
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (manufacturer === '' && model === '') {
            return alert("Please fill search bar")
        }
        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search)

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathName)

    }
    return (
        <form className={"searchbar"} onSubmit={handleSearch}>
            <div className={"searchbar__item"}>
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
                <SearchButton customStyles={"sm:hidden"}/>
            </div>
            <div className={"searchbar__item"}>
                <Image
                    src={"/model-icon.png"}
                    alt={"modal-icon"}
                    width={25}
                    height={25}
                    className={"absolute w-[20px] h-[20px] ml-4"}
                />
                <input
                    type={"text"}
                    name={"model"}
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder={"Tiguan"}
                    className={"searchbar__input"}
                />
                <SearchButton customStyles={"sm:hidden"}/>
            </div>
            <SearchButton customStyles={"max-sm:hidden"}/>
        </form>
    );
}

export default SearchBar;