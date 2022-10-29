import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create page
      </Typography>
      <Button
        onClick={() => console.log("clicked")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
}
