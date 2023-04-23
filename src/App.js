import "./styles.css";
import { WithAuth } from "./WithAuth";
import { Wrapped } from "./Wrapped";

export default function App() {
  return (
    <div className="App">
      <WithAuth>
        <Wrapped />
      </WithAuth>
    </div>
  );
}
