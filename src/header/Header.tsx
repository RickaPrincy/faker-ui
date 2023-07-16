import Button from "../components/Button";

function Header() {
    const handleClick = () => window.scrollTo(0,window.innerHeight);

    return ( 
        <>
            <header className="d-flex flex-column vh-100 align-items-center justify-content-center">
                <h1 className="display-4 fw-bold text-white mb-4">Weclome to <span className="text-danger">Faker UI</span></h1>
                <Button onClick={handleClick} text="Get Started" className="danger px-4 py-2 fw-bold"/>
            </header>
            <div className="pb-2 pt-5">
                <h2 className="fw-bold text-white text-center f-35">Generate your fake data with <span className="text-danger">Faker-Js UI</span></h2>
                <h3 className="text-center text-muted2 fw-bold f-25">
                    Make sure that you have the <a href="https://github.com/RickaPrincy/faker-backend.git" target="_blank" rel="noreferrer">faker-backend</a>!
                </h3>
            </div>
        </>
    );
}

export default Header;