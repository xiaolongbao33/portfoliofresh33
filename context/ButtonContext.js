import React, { useContext, useState } from 'react';

const ButtonContext = React.createContext();
const ButtonUpdateContext = React.createContext();

export function useButton() {
  return useContext(ButtonContext);
}

export function useButtonUpdate() {
  return useContext(ButtonUpdateContext);
}

export function ButtonProvider({ children }) {
  const [renderProjects, setRenderProjects] = useState(false);

  function toggleButton() {
    setRenderProjects((prevRenderProjects) => !prevRenderProjects);
  }

  return (
    <ButtonContext.Provider value={renderProjects}>
      <ButtonUpdateContext.Provider value={toggleButton}>
        {children}
      </ButtonUpdateContext.Provider>
    </ButtonContext.Provider>
  );
}
