const rockColorPalettes = [
    // 1. Classic Gray Stones
    [[224, 224, 224, 255], [169, 169, 169, 255], [105, 105, 105, 255], [13, 13, 13, 255]],

    // 2. Desert Sandstones
    [[244, 194, 153, 255], [222, 184, 135, 255], [205, 133, 63, 255], [134, 83, 20, 255]],

    // 3. Coastal Blues
    [[201, 235, 241, 255], [135, 206, 235, 255], [95, 158, 160, 255], [0, 64, 112, 255]],

    // 4. Mossy Mountain
    [[102, 230, 102, 255], [154, 205, 50, 255], [107, 142, 35, 255], [4, 60, 4, 255]],

    // 5. Volcanic Reds
    [[229, 138, 138, 255], [178, 34, 34, 255], [165, 42, 42, 255], [98, 0, 0, 255]],

    // 6. Arctic Ices
    [[240, 248, 255, 255], [240, 240, 250, 255], [176, 224, 230, 255], [45, 115, 215, 255]],

    // 7. Warm Terracottas
    [[229, 121, 121, 255], [188, 72, 72, 255], [175, 64, 53, 255], [105, 0, 0, 255]],

    // 8. Cosmic Purples
    [[220, 158, 243, 255], [186, 85, 211, 255], [147, 112, 219, 255], [65, 0, 100, 255]],

    // 9. Jungle Greens
    [[69, 184, 69, 255], [34, 139, 34, 255], [0, 128, 0, 255], [0, 60, 0, 255]],

    // 10. Twilight Hues
    [[255, 149, 122, 255], [233, 150, 122, 255], [100, 149, 237, 255], [0, 9, 46, 255]]
];




const ColorPaletteDisplay = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            {rockColorPalettes.map((palette, index) => (
                <div key={index} style={{ display: 'flex', gap: '8px' }}>
                    {palette.map((color, colorIndex) => (
                        <div
                            key={colorIndex}
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: `rgba(${color.join(',')})`,
                                border: '1px solid #000',
                                boxShadow: '2px 2px 5px #aaa'
                            }}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ColorPaletteDisplay;