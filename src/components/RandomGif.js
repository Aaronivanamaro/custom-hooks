import useGif from "../hooks/useGif";

const RandomGif = () => {
    const { gif, fetchGif } = useGif()

    return (
        <div>
            <h2>Random Gif</h2>
            <img src={gif} alt="Random GIF" />
            <button onClick={fetchGif}>Click To Change GIF</button>
        </div>
    );
}
 
export default RandomGif;