
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
