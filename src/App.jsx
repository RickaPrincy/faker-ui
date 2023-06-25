import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./components/Title";
import Forms from "./components/Forms"
import "./assets/css/Variable.css";

function App() {
    return (
        <>
            <div className="bg-black-hidden">
                <Header/>
                <Title/>
                <Forms/>
            </div>
        </>
    );
}
export default App;
        
        
        
        
        
        