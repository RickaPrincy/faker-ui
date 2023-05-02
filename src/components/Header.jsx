import "../css/Header.css";
import "../css/Variable.css";
import Button from "./Button";

export default function Header(){
    const handleClick = () => window.scrollTo(0,window.innerHeight);

    return <header className="d-flex justify-content-center align-items-center flex-column bg-black-hidden">
        <h1 className="text-white fw-bold display-4">Welcome to <span className="text-danger">Faker-UI</span></h1>
        <Button color="danger btn-started f-18" onClick={handleClick}>Get Started</Button>
    </header>
}