import { Routes as Router , Route } from "react-router";
import { AppRoutes } from "./routes/app-route";
import AppRouter from "./app-router";

const MainRouter = () =>  {
    return (
        <Router>
            <Route element = {<AppRouter/>}>
                {AppRoutes.map((route) => (
                    <Route key={route.path} path= {route.path} element = {route.reactElement}/>
                ))}
            </Route>
        </Router>
    )
}

export default MainRouter;