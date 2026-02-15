import React, { useState } from "react";

function Modal({ onClose, children }) {
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
        onClick={(e) => e.stopPropagation()}
        style={{
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
