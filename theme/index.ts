import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({

  fonts: {
    
    
    heading:`Sora, ${base.fonts?.body}`,
    body:`Noto Sans JP, ${base.fonts?.body}`,
    
  },
  colors: {
    brand: {
      100: "#E5E5E5;",
     
      700:"#000",
      800:"#ffff",
      
    },
  },
});

export default theme;