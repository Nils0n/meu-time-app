import { Outlet, Navigate } from 'react-router-dom';

type PrivateRouteProps = {
	isAuthenticated: boolean;
}

function PrivateRoute({ isAuthenticated }: PrivateRouteProps) {
	return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute;
