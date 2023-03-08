import { useState, useEffect } from "react";

const Form = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = useState([])
    const getMemes = async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }

    useEffect(() => {
        getMemes()
    }, [])
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <div className="flex flex-col justify-center px-96 pt-12 gap-12">
            <div className="flex justify-between">
                <input
                    type="text"
                    placeholder="Top text"
                    className="border-gray-500 outline-none border-2"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="border-gray-500 outline-none border-2"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>

            <div className="bg-dark flex flex-col justify-center text-white">
                <button onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="relative">
                <img className="" src={meme.randomImage} alt="" />
                <h2 className="absolute top-0 left-44 text-2xl text-white">{meme.topText}</h2>
                <h2 className="absolute bottom-0 left-44 text-2xl text-white">{meme.bottomText}</h2>
            </div>

        </div >
    )
}

export default Form