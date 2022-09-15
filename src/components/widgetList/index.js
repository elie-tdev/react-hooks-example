import { useContext } from "react";
import { WidgetsContext } from "../../context/widgets.context";
import Card from "../card";
import "./style.scss";

function WidgetList() {
  const { widgetGlobalState } = useContext(WidgetsContext);
  return (
    <div className="widget-list__layout">
      {widgetGlobalState.widgets.map((widget, index) => {
        return <Card widgetIndex={index} widget={widget} key={index} />;
      })}
    </div>
  );
}

export default WidgetList;
