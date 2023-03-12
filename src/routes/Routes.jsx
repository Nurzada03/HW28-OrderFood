import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import AppLayout from '../pages/user/AppLayout'
import UserLayout from '../layout/UserLayout'
import { UserRoles } from '../lib/constants/common'
import { Meals as AdminMeals } from '../pages/admin/meals/Meals'
import Orders from '../pages/admin/Orders.page'
import { MealsePage } from '../pages/user/Meals.page'
import SignIn from '../pages/user/SignIn'
import SignUp from '../pages/user/SignUp'
import ProtectedRoute from './ProtectedRoute'

export const AppRoutes = () => {
    const role = useSelector((state) => state.auth.user.role)

    const isAllowed = (roles) => {
        return roles.includes(role)
    }

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute
                        isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                        fallBackPath="/admin/meals"
                        component={UserLayout}
                    />
                }
            >
                <Route
                    index
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([
                                UserRoles.GUEST,
                                UserRoles.USER,
                            ])}
                            fallBackPath="/admin/meals"
                            component={MealsePage}
                        />
                    }
                />
                <Route
                    path="signup"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([
                                UserRoles.GUEST,
                                UserRoles.USER,
                            ])}
                            fallBackPath={
                                role === UserRoles.ADMIN ? '/admin/meals' : '/'
                            }
                            component={SignUp}
                        />
                    }
                />
                <Route
                    path="signin"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([
                                UserRoles.GUEST,
                                UserRoles.USER,
                            ])}
                            fallBackPath={
                                role === UserRoles.ADMIN ? '/admin/meals' : '/'
                            }
                            component={SignIn}
                        />
                    }
                />
                <Route
                    path="orderfood"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([UserRoles.USER])}
                            fallBackPath={
                                role === UserRoles.ADMIN ? '/admin/meals' : '/'
                            }
                            component={AppLayout}
                        />
                    }
                />
            </Route>

            <Route
                path="/admin"
                element={
                    <ProtectedRoute
                        isAllowed={isAllowed([UserRoles.ADMIN])}
                        fallBackPath="/"
                        component={AdminLayout}
                    />
                }
            >
                <Route
                    path="meals"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([UserRoles.ADMIN])}
                            fallBackPath="/"
                            component={AdminMeals}
                        />
                    }
                />

                <Route
                    path="orders"
                    element={
                        <ProtectedRoute
                            isAllowed={isAllowed([UserRoles.ADMIN])}
                            fallBackPath="/"
                            component={Orders}
                        />
                    }
                />
            </Route>
            <Route
                path="*"
                element={<Typography>page Not Found!!!</Typography>}
            />
        </Routes>
    )
}
