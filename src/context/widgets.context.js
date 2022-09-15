import { useState, createContext, useCallback } from "react";

export const WidgetsContext = createContext({
  widgetGlobalState: {
    values: {},
    widgets: [],
  },
  addWidgetGlobalState: () => {},
  removeWidgetGolbalState: () => {},
  updateWidgetGlobalStateValue: () => {},
});

export const WidgetsContextProvider = ({ children }) => {
  const [widgetGlobalState, setWidgetGlobalState] = useState({
    values: {},
    widgets: [],
  });

  // server API call here
  // const submitWidgets = () => {
  // };

  const addWidgetGlobalState = useCallback(
    (type, data) => {
      const widget = {
        type,
        name: data.name,
        target: data.target,
      };
      const updatedGlobalState = {
        ...widgetGlobalState,
        values: {
          [widget.target]: undefined,
          ...widgetGlobalState.values,
        },
        widgets: [...widgetGlobalState.widgets, widget],
      };
      setWidgetGlobalState(updatedGlobalState);
      // submitWidgets(updatedGlobalState);
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
      // submitWidgets(updatedGlobalState);
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
      // submitWidgets(updatedGlobalState);
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
