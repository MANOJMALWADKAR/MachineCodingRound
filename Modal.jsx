import React, { useState, useEffect } from "react";

function Modal({ onClose, children }) {

  useEffect(() => {                      // Here we added useEffect because window is browser sideEffect and for sideEffect we added useEffect
    const handleEsc = (e) => {            // if we add just event handler only then it will causes re-render loop 
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);    
    return () => window.removeEventListener("keydown", handleEsc);    // this cleanup function stop Memory Leak, Unexpected Behaviour
  }, [onClose]);
  
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}     // Here we add stoppropagation because to stop the bubble Phase if we click on this div then it will bubble up to parent,  
        style={{                                 // and calls that onClose function then pop up modal will close that why we added here to stop that phase
          background: "#fff",
          padding: 20,
          borderRadius: 6,
          minWidth: 300,
        }}
      >
        <button style={{ float: "right" }} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h3>Modal</h3>

      <button onClick={() => setOpen(true)}> Click to Open Modal</button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h3>Hello </h3>
          <p>This is reusable modal component</p>
        </Modal>
      )}
    </>
  );
}

export default App;
