const pixelarts = import.meta.glob('/src/assets/pixelart/*.png', { 
    eager: true, 
    import: 'default' 
}) as Record<string, string>;

export default pixelarts;