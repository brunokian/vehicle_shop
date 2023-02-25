import { Link } from "react-router-dom"

function InitialPage() {
    return (
        <div>
            <h1>InitialPage</h1>
            <Link to="/motoPage">
                <button>MotorcyclesDB</button>
            </Link>
            <Link to="/carPage">
                <button>CarDB</button>
            </Link>
        </div>
    )
}

export default InitialPage
