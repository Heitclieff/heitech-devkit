import { RouterInterface } from "../interface/routes-interface";
import LandingPage from "../pages/landing";

const AppRoutes : RouterInterface[] = [{
    path: '/',
    reactElement : <LandingPage/>
}]

export { AppRoutes }