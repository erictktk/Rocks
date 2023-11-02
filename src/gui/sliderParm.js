import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import {useState} from 'react';

export default function SliderParm({label="▪ Slider", range=[0, 10], callback=null}){ 
    const [sliderValue, setSliderValue] = useState(range[1]);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
        if (callback){
            callback(newValue);
        }
    };

    //{label}: {sliderValue}

    return(
        <ListItem>
            <Box sx={{marginLeft: "10px"}}>
                <Typography sx={{fontSize: ".9rem", opacity: .8}} gutterBottom>{label}</Typography>
                <Slider
                    valueLabelDisplay="auto"
                    aria-label="Small"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    style={{ width: 200}}
                    min={range[0]}
                    max={range[1]}
                    
                />
            </Box>
        </ListItem>
    );
}