import React from "react";
import { render } from "react-dom";
import { TransitionMotion, spring } from "react-motion";
import "./Searchbox.css";

class Searchbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onChange: props.onChange, 
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Enter Query Here"
    };
  }

  changeValue = (event) =>  {
    const value = event.target.value;
    this.state.onChange(event.target.value)
    this.setState({ value});
  }

  handleKeyPress = (event) =>  {
    if (event.which === 13) { //enter key hit 
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { active, value, label } = this.state;
    const {  locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (
      <div className={fieldClassName}>
        <input
          id={1}
          type="text"
          value={value}
          placeholder={label}
          onChange={(event) => this.changeValue(event)}
          onKeyPress={this.handleKeyPress.bind(this)}
          onFocus={() => !locked && this.setState({ active: true })}
          onBlur={() => !locked && this.setState({ active: false })}
        />
        <label htmlFor={1}>
          {label}
        </label>
      </div>
    );
  }
}

export default Searchbox; 