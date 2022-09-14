import { useContext } from "react";
import ReactJson from "react-json-view";
import { WidgetsContext } from "../../screens/widgets.context";
import "./style.scss";

function GlobalSate() {
  const { widgetGlobalState } = useContext(WidgetsContext);
  return (
    <div className="global-state__layout">
      <div className="title">GlobalSate</div>
      <ReactJson
        src={widgetGlobalState}
        displayDataTypes={false}
        displayObjectSize={false}
        enableEdit={false}
        enableClipboard={false}
        collapsed={false}
        name="widgetGlobalState"
      />
    </div>
  );
}

export default GlobalSate;
