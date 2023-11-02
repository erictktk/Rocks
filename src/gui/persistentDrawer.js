import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';

import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SliderParm from './sliderParm';

import ColorPalettePopover from "./colorPalettePopover";



import { styled } from '@mui/system';

const StyledDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
        background: '#1E1E1E',  // Dark grey from the previous palette
        color: '#FFFFFF',
    },
});

export default function PersistentDrawer() {
    const [drawerOpen, setDrawerOpen] = useState(true);


    return (
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <StyledDrawer
                autoWidth={false}
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                style={{ width: "250px", overflow: "auto", boxSizing: "border-box" }}
            >
                <List>
                    <ListItemText sx={{opacity: .5, textAlign: "left", marginLeft: "10px"}} primary="Controls" />
                    <SliderParm/>
                    <ColorPalettePopover/>
                </List>
            </StyledDrawer>
            <main style={{ flexGrow: 1, padding: 3 }}>
                {/* Content goes here */}
                <Typography paragraph>
                    Click the slider in the drawer to adjust the value.
                </Typography>
            </main>
        </div>
    );
}