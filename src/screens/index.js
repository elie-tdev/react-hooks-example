import WidgetsScreen from "./widgets";
import { WidgetsContextProvider } from "./widgets.context";

function Screens() {
  return (
    <WidgetsContextProvider>
      <WidgetsScreen />
    </WidgetsContextProvider>
  );
}

export default Screens;
