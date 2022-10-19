import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="light" translucent />
      <Home />
    </>
  );
}
