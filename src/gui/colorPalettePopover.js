import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import ColorPaletteItem from './colorPaletteItem';

export const rockColorPalettes = [
    // 1. Classic Gray Stones
    [[211, 211, 211, 255], [169, 169, 169, 255], [105, 105, 105, 255], [47, 79, 79, 255]],
    
    // 2. Desert Sandstones
    [[222, 184, 135, 255], [205, 133, 63, 255], [244, 164, 96, 255], [210, 105, 30, 255]],
    
    // 3. Coastal Blues
    [[176, 224, 230, 255], [70, 130, 180, 255], [135, 206, 235, 255], [95, 158, 160, 255]],
    
    // 4. Mossy Mountain
    [[34, 139, 34, 255], [50, 205, 50, 255], [107, 142, 35, 255], [154, 205, 50, 255]],
    
    // 5. Volcanic Reds
    [[205, 92, 92, 255], [178, 34, 34, 255], [139, 0, 0, 255], [165, 42, 42, 255]],
    
    // 6. Arctic Ices
    [[230, 230, 250, 255], [176, 224, 230, 255], [240, 248, 255, 255], [135, 206, 250, 255]],
    
    // 7. Warm Terracottas
    [[205, 85, 85, 255], [188, 72, 72, 255], [175, 64, 53, 255], [159, 54, 45, 255]],
    
    // Exotic Palettes
    // 8. Cosmic Purples
    [[138, 43, 226, 255], [147, 112, 219, 255], [218, 112, 214, 255], [186, 85, 211, 255]],
    
    // 9. Jungle Greens
    [[0, 128, 0, 255], [46, 139, 87, 255], [34, 139, 34, 255], [0, 100, 0, 255]],
    
    // 10. Twilight Hues
    [[70, 130, 180, 255], [255, 99, 71, 255], [233, 150, 122, 255], [100, 149, 237, 255]]
];


const ColorPalettePopover = ({ palettes=rockColorPalettes, columns = 3 }) => {
    const [selectedPalettes, setSelectedPalettes] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePaletteClick = (index) => {
        if (selectedPalettes.includes(index)) {
            setSelectedPalettes(prev => prev.filter(i => i !== index));
        } else {
            setSelectedPalettes(prev => [...prev, index]);
        }
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const contentsStyle = {padding: '10px', 
        display: 'grid', 
        gridTemplateColumns: `repeat(${columns}, 1fr)`, 
        gap: '2px',
        backgroundColor: "rgba(10, 10, 10, 255)"
    }

    return (
        <div>
            <Button sx={{fontSize: "12px", padding: "6px"}} onClick={handleClick} variant="contained" color="primary">
                More...
            </Button>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={contentsStyle}>
                    {palettes.map((palette, index) => (
                        <ColorPaletteItem 
                            key={index} 
                            palette={palette} 
                            isSelected={selectedPalettes.includes(index)}
                            onClick={() => handlePaletteClick(index)}
                        />
                    ))}
                </div>
            </Popover>
        </div>
    );
}

export default ColorPalettePopover;