import Nav from "../components/Header/Nav"
import { Link } from "react-router-dom"

function IndexPage() {
    return (
        <div>
            <Nav />
            Index Page
            <button>
                <Link to="/register">Make Your First SALE!  </Link>
            </button>
        </div>
    )
}

export default IndexPage