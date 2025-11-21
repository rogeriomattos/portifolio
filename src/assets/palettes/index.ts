const palettes = import.meta.glob('/src/assets/palettes/*.png', { 
    eager: true, 
    import: 'default' 
}) as Record<string, string>;

export default palettes;