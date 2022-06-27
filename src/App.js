import { createTheme, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import MainPage from "./components/MainPage";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        bgcolor: "#181818",
      }}
    >
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </Stack>
  );
}

export default App;
