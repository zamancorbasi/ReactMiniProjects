import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    

    
    return(
        <>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            
            <Link to="/">Home</Link>

            <Link to="/second">Second Page</Link>

            <button>SecondPage</button>
        </div>

        
        
        </>
    )
}

export default Home;