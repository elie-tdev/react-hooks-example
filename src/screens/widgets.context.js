import { useState, createContext, useCallback } from "react";

export const WidgetsContext = createContext({});

export const WidgetsContextProvider = ({ children }) => {
  const [widgetGlobalState, setWidgetGlobalState] = useState({
    values: {},
    widgets: [],
  });

  const addWidgetGlobalState = useCallback(
    (type, data) => {
      const widget = {
        type,
        name: data.name,
        target: data.target,
      };
      setWidgetGlobalState({
        ...widgetGlobalState,
        values: {
          [widget.target]: undefined,
          ...widgetGlobalState.values,
        },
        widgets: [...widgetGlobalState.widgets, widget],
      });
    },
    [widgetGlobalState]
  );

  const updateWidgetGlobalStateValue = useCallback(
    (value) => {
      setWidgetGlobalState({
        ...widgetGlobalState,
        values: {
          ...widgetGlobalState.values,
          ...value,
        },
      });
    },
    [widgetGlobalState]
  );

  const removeWidgetGolbalState = useCallback(
    (widgetIndex, target) => {
      const filteredWidgets = widgetGlobalState.widgets.filter(
        (_, i) => i !== widgetIndex
      );

      const widgetsByTarget = widgetGlobalState.widgets.filter(
        (e) => e.target === target
      );

      if (widgetsByTarget.length < 2) {
        delete widgetGlobalState.values[target];
      }

      setWidgetGlobalState({
        ...widgetGlobalState,
        widgets: [...filteredWidgets],
      });
    },
    [widgetGlobalState]
  );

  return (
    <WidgetsContext.Provider
      value={{
        widgetGlobalState,
        addWidgetGlobalState,
        removeWidgetGolbalState,
        updateWidgetGlobalStateValue,
      }}
    >
      {children}
    </WidgetsContext.Provider>
  );
};
