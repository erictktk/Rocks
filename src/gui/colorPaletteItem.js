import {useState} from "react";

function rgbaToString(colorArray) {
    return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${colorArray[3] / 255})`;
}

const ColorPaletteDisplay = ({ palette, callback=null, width="60px", height="20px" }) => {
    const [isSelected, setIsSelected] = useState(false);

    const clickCallback = (e) => {
        setIsSelected( (prev) => {return !prev;});
        if (callback){
            //toggle, no need for value
            callback();
        }
    }

    const borderStyle = {
        padding: "2px",
        borderStyle: "solid",
        borderColor: isSelected ? "rgba(255, 255, 255, 155" : "transparent",
    }

    return (
        <div style={borderStyle} onClick={clickCallback}>
            <div style={{ display: 'flex', width: width, height: height, overflow: 'hidden' }}>
                {palette.map((color, index) => (
                    <div key={index} style={{ flex: 1, backgroundColor: rgbaToString(color) }}></div>
                ))}
            </div>
        </div>
    );
}

export default ColorPaletteDisplay;





