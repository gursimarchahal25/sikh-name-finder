import Namecard from './Namecard';

function Namelist({ names }) {
    return (
        <div classname="namelist">
            {names.map((items) => (
                <Namecard key={items.name} name={items.name} meaning={items.meaning} />
            ))}
            </div>
    );
    }

export default Namelist;
