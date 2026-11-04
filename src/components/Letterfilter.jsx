const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
function Letterfilter() {
    return (
        <div className="letterfilter">
            {letter.map((l) => (
                <button key={l}>{l}</button>
            ))}
        </div>
    );

}
export default Letterfilter;
