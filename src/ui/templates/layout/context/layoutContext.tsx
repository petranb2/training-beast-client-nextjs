import React, { createContext, useState } from "react";

const LayoutContext = createContext({});

function LayoutProvider(props: any) {
  const [linearProgress, setLinearProgress] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        linearProgress: linearProgress,
        setLinearProgress: setLinearProgress,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
}

export { LayoutProvider, LayoutContext };
