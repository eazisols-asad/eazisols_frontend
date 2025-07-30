
"use client";
import React, { createContext, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SnackbarContext = createContext();
export const useSnackbar = () => useContext(SnackbarContext);

export const Snakbar = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSnackbarOpen = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <SnackbarContext.Provider value={{ handleSnackbarOpen }}>
      {children}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ zIndex: 9999 }}
      >
        <MuiAlert
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

// "use client";
// import React, { createContext, useContext, useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const SnackbarContext = createContext();
// export const useSnackbar = () => useContext(SnackbarContext);

// export const Snakbar = ({ children }) => {
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const handleSnackbarOpen = (message, severity = "success") => {
//     setSnackbar({ open: true, message, severity });
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === "clickaway") return;
//     setSnackbar((prev) => ({ ...prev, open: false }));
//   };

//   // ✅ Trigger toast only when snackbar.open === true
//   useEffect(() => {
//     if (snackbar.open) {
//       toast[snackbar.severity](snackbar.message, {
//         onClose: () => handleSnackbarClose(null, null),
//         position: "top-right",
//         autoClose: 6000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   }, [snackbar]);

//   return (
//     <SnackbarContext.Provider value={{ handleSnackbarOpen }}>
//       {children}
//       <ToastContainer
//         position="top-right"
//         autoClose={6000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//         style={{ zIndex: 9999 }}
//       />
//     </SnackbarContext.Provider>
//   );
// };
