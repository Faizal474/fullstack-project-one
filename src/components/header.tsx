const Header = ({ message }) => {
    console.log({message});
    return (
        <div className="header">
            {message}
        </div>
    );
};

export default Header;