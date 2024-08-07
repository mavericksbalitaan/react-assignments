import React, { useState } from "react";

export default class ConditionalRenderer extends React.Component {
  constructor() {
    super();
    this.state = { isVisible: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return {
        isVisible: !this.state.isVisible,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h4>Class Component</h4>
        {this.state.isVisible ? (
          <div>Component is Visible</div>
        ) : (
          <div>Component is Hidden</div>
        )}
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }
}

/*
export default function ConditionalRenderer() {
	const [isVisible, setIsVisible] = useState(false);

	const handleClick = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className="container">
				<h4>Function Component</h4>
			{isVisible ? (
				<div>Component is Visible</div>
			) : (
				<div>Component is Hidden</div>
			)}
			<button type="button" onClick={handleClick}>
				Click Me
			</button>
		</div>
	);
}
*/
