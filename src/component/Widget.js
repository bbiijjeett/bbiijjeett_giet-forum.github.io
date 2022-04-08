import React from "react";
import "../css/Widget.css";
import WidgetContent from "./WidgetContent";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Top Articles to read</h5>
      </div>
      <div className="widget__contents">
        <WidgetContent />
      </div>
    </div>
  );
}

export default Widget;