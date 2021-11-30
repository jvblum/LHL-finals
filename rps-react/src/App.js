import "./styles.css";

import Landing from "./components/Landing";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "RPS+DM";
  }, []);
  return (
    <Landing />
  );
}
