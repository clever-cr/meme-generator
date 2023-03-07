import { React, useState } from "react";
import memeData from "../data/memeData";



const Form = () => {
    const [memeImage, setMemeImage] = useState("");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemeImages, setAllMemeImages] = useState(memeData)
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
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
                    className="border-gray-500 outline-none"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="border-gray-500 outline-none"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>

            <div className="bg-dark flex flex-col justify-center text-white">
                <button onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <img className="" src={meme.randomImage} alt="" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    )
}

export default Form