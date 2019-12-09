import * as React from "react";

import { redText } from "./message.styles.css";

const Message: React.FunctionComponent = () => {
  return (
    <div>
      <p>
        {`Hey, Andrew!`}
        <span className={redText}>{`<3`}</span>
      </p>
    </div>
  );
};

export { Message };
