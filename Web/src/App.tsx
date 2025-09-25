import { useState } from "react";
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack
      spacing={4}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", bgcolor: "background.default", p: 2 }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Material-UI Test App
      </Typography>

      <Card sx={{ minWidth: 275, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Counter Example
          </Typography>
          <Typography sx={{ mb: 2 }} color="text.secondary">
            Click the button to increase the count
          </Typography>
          <Button variant="contained" color="primary" onClick={() => setCount((prev) => prev + 1)}>
            Count is {count}
          </Button>
        </CardContent>
      </Card>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
        <Button variant="text" color="success">
          Success Button
        </Button>
      </Stack>

      <Typography variant="body1" color="text.secondary">
        If you see styled buttons, cards, and typography, MUI is working!
      </Typography>
    </Stack>
  );
}

export default App;
