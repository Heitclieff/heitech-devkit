import { Outlet } from "react-router";

const AppRouter = () => {
    return (
        <main>
            {/* nestest routing */}
            <Outlet/>
        </main>
    )
}

export default AppRouter;