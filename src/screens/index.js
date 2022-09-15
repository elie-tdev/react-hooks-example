import WidgetsScreen from "./widgets";
import { WidgetsContextProvider } from "../context/widgets.context";

function Screens() {
  return (
    <WidgetsContextProvider>
      <WidgetsScreen />
    </WidgetsContextProvider>
  );
}

export default Screens;
