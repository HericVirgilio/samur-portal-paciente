import React from "react";

export function CheckboxDemo(props: { habilitado: boolean }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="scales"
        name="scales"
        checked={props.habilitado}
      />
    </div>
  );
}
