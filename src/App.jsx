import AvatarPage from "./Pages/Avatar/AvatarPage";
import UserTicket from "./Pages/UserTicket/UserTicket";
import UserContext from "./context/UserContext";
import "./style/Avatar.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
export default function App() {
  const data = useParams();
  console.log(data);
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/ticket/:id" element={<UserTicket />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
    </ErrorBoundary>
  );
}

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Some problem occured with your details</p>
      {/* <pre style={{ color: "red" }}>{error.message}</pre> */}
    </div>
  );
}