import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<Welcome />);

function Welcome() {
  return <h1>Welcome!</h1>;
}
