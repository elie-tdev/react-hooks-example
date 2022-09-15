import { useContext } from "react";
import { useForm } from "react-hook-form";
import { WidgetsContext } from "../../context/widgets.context";
import Input from "../input";
import Button from "../button";

import "./style.scss";

function AddWidget() {
  const { addWidgetGlobalState } = useContext(WidgetsContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addaddWidget = (type, data) => {
    addWidgetGlobalState(type, data);
    reset();
  };

  return (
    <div className="add-widget__layout">
      <div className="title">Add Widget</div>
      <form>
        <div className="footer-container">
          <Input
            placeholder="Input Name of the Widget"
            register={register("name", {
              required: "Please enter a widget name",
            })}
            error={errors.name && errors.name.message}
          />
          <Input
            placeholder="Input Name of value the Widget"
            error={errors.target && errors.target.message}
            register={register("target", {
              required: "Please enter a name of value the Widget",
            })}
          />
          <div className="buttons-box">
            <Button
              onClick={handleSubmit((data) => addaddWidget("inputbox", data))}
            >
              Create InputBox
            </Button>
            <Button
              onClick={handleSubmit((data) => addaddWidget("buttons", data))}
            >
              Create Buttons
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddWidget;
