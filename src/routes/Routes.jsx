import { Route, Routes } from 'react-router-dom'
import UserLayout from '../layout/UserLayout'
import { MealsePage } from '../pages/Meals'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<MealsePage />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
            </Route>
        </Routes>
    )
}
