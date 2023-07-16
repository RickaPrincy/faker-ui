import Button from "../components/Button";

function Header() {
    const handleClick = () => window.scrollTo(0,window.innerHeight);

    return ( 
        <>
            <header className="d-flex flex-column vh-100 align-items-center justify-content-center">
                <h1 className="display-4 fw-bold text-white mb-4">Weclome to <span className="text-danger">Faker UI</span></h1>
                <Button onClick={handleClick} text="Get Started" className="danger px-4 py-2 fw-bold"/>
            </header> 
        </>
    );
}

export default Header;