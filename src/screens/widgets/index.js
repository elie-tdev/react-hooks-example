import AddWidget from "../../components/addWidget";
import GlobalSateView from "../../components/globalStateView";
import WidgetList from "../../components/widgetList";
import "./style.scss";

function WidgetsScreen() {
  return (
    <div className="widget-screen__layout">
      <div className="widget-screen__body">
        <div className="container">
          <GlobalSateView />
          <div className="widgets">
            <WidgetList />
          </div>
        </div>
      </div>
      <div className="footer">
        <AddWidget />
      </div>
    </div>
  );
}

export default WidgetsScreen;
