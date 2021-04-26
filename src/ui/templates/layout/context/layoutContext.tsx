import React, { createContext, useState } from "react";
type LayoutContent = {
  linearProgress: boolean
  setLinearProgress: (flag: boolean) => void
}
const LayoutContext = createContext<LayoutContent>({ linearProgress: false, setLinearProgress: () => { } });

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
