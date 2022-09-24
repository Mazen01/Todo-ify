import { Box } from "@mui/material";
import { Dashboard } from "./components/Dashboard";
import { CtxProvider } from "./context/Provider";

function App() {
  return (
    <CtxProvider>
      <Box>{<Dashboard />}</Box>
    </CtxProvider>
  );
}

export default App;