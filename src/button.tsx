import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component<any, any> {
   render() {
      return <Button style={{ backgroundColor: "aqua" }}>{this.props.children}</Button>;
   }
}

export { Button };
