import { useState } from "react";
import useGif from "../hooks/useGif";

const ChosenGif = () => {
    const [tag, setTag] = useState('heroes')
    const { gif, fetchGif } = useGif(tag)

    return (
        <div>
            <h2>Random {tag} Gif</h2>
            <img src={gif} alt="Random GIF" />
            <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={fetchGif}>Click To Change GIF</button>
        </div>
    );
}
 
export default ChosenGif;