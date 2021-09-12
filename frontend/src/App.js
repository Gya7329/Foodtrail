import React from "react";
import HomeScreen from "./screen/HomeScreen";
import {
  ThemeProvider,
  CssBaseline,
  Paper,
  Container,
  createMuiTheme,
} from "@material-ui/core";
import { BrowserRouter ,Route} from "react-router-dom";
import ChooseScreen from "./screen/ChooseScreen";

function App() {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontWeight: "bold",
      },
      h2: {
        fontSize: "2rem",
        color: "black",
      },
      h3: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        color: "white",
      },
    },
    palette: {
      primary: { main: "#ff1744" },
      secondary: {
        main: "#118c16",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxwidth="sm">
          <Paper>
            <Route path='/' component={HomeScreen} exact={true}/>
            <Route path='/choose' component={ChooseScreen} exact={true}/>

     
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
