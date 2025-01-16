import {
  Alert,
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  mt: 2,
};

const AlertModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setalertMessage(""); // Reset the alert message when modal opens
  };
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState(""); // to store email input
  const [crypto, setCrypto] = useState(""); // to store cryptocurrency input
  const [priceChange, setPriceChange] = useState(""); // to store price change input
  const [alertMessage, setalertMessage] = useState("");

  // This function will handle the form submission and pass the data to parent
  const handleSubmit = () => {
    if (email && crypto && priceChange) setalertMessage("success");
    else setalertMessage("failure");
  };
  return (
    <div>
      <Button
        style={{ color: "white", fontWeight: "bolder" }}
        onClick={handleOpen}
      >
        Get Alerts
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px", // Add consistent spacing between elements
              padding: "16px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#1976d2", // Primary color
                textAlign: "center",
              }}
            >
              Set Alert Criteria
            </Typography>
            {alertMessage && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                {alertMessage === "success" ? (
                  <Alert severity="success">
                    Alert criteria set successfully!
                  </Alert>
                ) : (
                  <Alert severity="warning">Please fill all fields.</Alert>
                )}
              </Stack>
            )}
            <TextField
              label="Enter Email"
              color="primary"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Cryptocurrency"
              color="primary"
              fullWidth
              value={crypto}
              onChange={(e) => setCrypto(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Price Change (%)"
              color="primary"
              fullWidth
              value={priceChange}
              onChange={(e) => setPriceChange(e.target.value)}
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "4px",
              }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              sx={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "4px",
              }}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AlertModal;
