//import { DisplayImages } from "./examples/loadimages";
import ImageProcessor, { ToPixelArray, PSDProcessor, PSDProcessorAuto } from "./PixelArrayReact";
import "./styles.css";
import pic0 from "./ImagesFolder/pixil-frame-0.png";
import PersistentDrawer from "./gui/persistentDrawer";

import ColorPaletteDisplay from "./rocks";

import { createTheme, ThemeProvider } from '@mui/material/styles';

//thing = false;

const palette = {
  //primary: "#41A8F8",   // Bright Blue
  //primary: "#00AEAE",
  primary: "#1e9090",
  secondary: "#F64C72", // Bright Pink
  error: "#F5624D",     // Reddish
  warning: "#F3C74D",   // Gold/Yellow
  info: "#56CCF2",      // Sky Blue
  success: "#2DCE89",   // Green
  dark: "#1E1E1E",      // Dark grey
  medium: "#343434",    // Medium grey
  light: "#E0E0E0",     // Light grey
}

const theme = createTheme({
    palette: {
        primary: {
            main: palette.primary,
        },
    },
    components: {
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    color: palette.primary,
                },
                track: {
                    color: palette.primary,
                },
                rail: {
                    color: palette.light,
                },
                active: {
                    boxShadow: '0 0 0 8px rgba(65, 168, 248, 0.16)', // A soft glow effect using primary color.
                }
            }
        }
    }
});



/*<ImageProcessor src={pic0}/>*/
/*<DisplayImages/>*/
//<ToPixelArray/>

export function OldApp() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      
      
      <ImageProcessor src={pic0}/>
      <PersistentDrawer/>
      <ColorPaletteDisplay/>
    </div>
    </ThemeProvider>
  );
}

export function AppImageProcessor() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        
        
        <ImageProcessor src={pic0}/>
      </div>
      </ThemeProvider>
    );
  }


export function AppPSDProcessor(){
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>PSDProcessor</h1>

        <PSDProcessorAuto/>
      </div>
    </ThemeProvider>
  )
}


export default AppPSDProcessor;