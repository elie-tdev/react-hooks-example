import { useContext, useEffect, useState } from "react";
import { WidgetsContext } from "../../screens/widgets.context";
import Button from "../button";
import Input from "../input";
import "./style.scss";

function Card({ widget, widgetIndex }) {
  const {
    removeWidgetGolbalState,
    widgetGlobalState,
    updateWidgetGlobalStateValue,
  } = useContext(WidgetsContext);

  const [inputValue, setInputValue] = useState(
    widgetGlobalState.values[widget.target]
  );

  const handleBlur = (e) => {
    updateWidgetGlobalStateValue({
      [widget.target]: +e.target.value,
    });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePlusButton = () => {
    updateWidgetGlobalStateValue({
      [widget.target]:
        widgetGlobalState.values[widget.target] === undefined
          ? 0
          : ++widgetGlobalState.values[widget.target],
    });
  };

  const handleMinusButton = () => {
    updateWidgetGlobalStateValue({
      [widget.target]:
        widgetGlobalState.values[widget.target] === undefined
          ? 0
          : --widgetGlobalState.values[widget.target],
    });
  };

  useEffect(() => {
    setInputValue(widgetGlobalState.values[widget.target]);
  }, [widget.target, widgetGlobalState.values]);

  return (
    <div className="widget-card__layout">
      <div className="card-title">
        <div>
          <b>Name:</b>&nbsp;{widget.name}&nbsp; (
          <span className="widget-type">{widget.type}</span>)
        </div>
        <button
          className="close"
          onClick={() => removeWidgetGolbalState(widgetIndex, widget.target)}
        >
          X
        </button>
      </div>
      <div>
        <b>Value Name: </b>
        &nbsp;{widget.target}
      </div>
      <div>Value: {widgetGlobalState.values[widget.target]}</div>
      <div className="card-footer">
        {widget.type === "inputbox" && (
          <Input
            value={inputValue === undefined ? "" : inputValue}
            type="number"
            min={0}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        )}
        {widget.type === "buttons" && (
          <>
            <Button onClick={handlePlusButton}>Button: +1</Button>
            <Button
              disabled={widgetGlobalState.values[widget.target] < 1}
              onClick={handleMinusButton}
            >
              Button: -1
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
