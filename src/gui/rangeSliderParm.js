import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import {useState} from 'react';

export default function RangeSliderParm({label="▪ Range Slider", range=[0, 10], callback=null}){ 
    const startingRanges = [Math.floor(range[1]/2), Math.floor(range[1]/3*2)];
    const [sliderValue, setSliderValue] = useState(startingRanges[0], startingRanges[1]]);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
        if (callback){
            callback(newValue);
        }
    };
    return(
        <ListItem>
            <Box sx={{marginLeft: "10px"}}>
                <Typography sx={{fontSize: ".9rem", opacity: .8}} gutterBottom>{label}: {sliderValue}</Typography>
                <Slider
                    valueLabelDisplay="auto"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    aria-labelledby="continuous-slider"
                    style={{ width: 200}}
                    min={range[0]}
                    max={range[1]}
                    
                />
            </Box>
        </ListItem>
    );
}