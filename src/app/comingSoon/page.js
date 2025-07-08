import { Box, Container, Typography, TextField, Button, Stack } from "@mui/material";

const ComingSoon = () => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#f0f4f8" }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center", backgroundColor: "#fff", borderRadius: 3, p: 4, boxShadow: 3 }}>
        {/* SVG Illustration */}
        <Box mb={3}>
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15 8H9L12 2Z" fill="#1976d2" />
            <path d="M12 22L9 16H15L12 22Z" fill="#1976d2" />
            <path d="M2 12L8 15V9L2 12Z" fill="#1976d2" />
            <path d="M22 12L16 9V15L22 12Z" fill="#1976d2" />
          </svg>
        </Box>

        {/* Heading */}
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          Coming Soon
        </Typography>

        {/* Description */}
        <Typography variant="body1" color="textSecondary" mb={3}>
          We're building something awesome. Stay tuned!
        </Typography>

        {/* Email Input (Optional) */}
        <Stack direction="row" spacing={1} justifyContent="center">
          {/* <TextField
            variant="outlined"
            placeholder="Enter your email"
            size="small"
            sx={{ width: "70%" }}
          /> */}
          <Button variant="contained" color="primary">
            Notify Me
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ComingSoon;
