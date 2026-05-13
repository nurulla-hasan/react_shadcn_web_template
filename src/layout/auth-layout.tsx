import { Suspense } from "react";
import { Outlet, Navigate } from "react-router";

const AuthLayout = () => {
  const accessToken = "for testing only"; // useAppSelector((state) => state.auth.accessToken);
  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;
