import HomePage from "./pages/user/homePage";
import { ROUTTERS } from "./utils/router";
import {Routes, Route} from 'react-router-dom';
import MaterLayout from './pages/user/theme/materLayout'
import ProfilePage from "./pages/user/profilePage";

const renderUserRouter = () =>{
    const userRouters = [
        {
            path: ROUTTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTTERS.USER.PROFILE,
            component: <ProfilePage />
        }
    ]
    return (
        <MaterLayout>
            <Routes>
                {
                    userRouters.map((item, index) =>(<Route key={index} path={item.path} element = {item.component} />))
                }
            </Routes>
        </MaterLayout>
    )
}

const RouterCustom = () =>{
    return renderUserRouter();
};
export default RouterCustom;