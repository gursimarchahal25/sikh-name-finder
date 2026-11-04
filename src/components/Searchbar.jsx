function Searchbar({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Search by name or meaning..."
            value={value}
            onChange={(e) => onChange(e.target.value)}  
        
        />
    );
}
export default Searchbar;
