import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className="App">
            <Outlet />
            <div>outlet</div>
        </main>
        
    )
}

export default Layout
