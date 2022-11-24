import { createRoot } from "react-dom/client";
const container = document.getElementById("app");

const App = () => {
  return <div>Hello world!</div>;
};

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
