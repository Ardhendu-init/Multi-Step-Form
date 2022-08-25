import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({

  fonts: {
    
    
    heading:`Sora, ${base.fonts?.body}`,
    body:`Noto Sans JP, ${base.fonts?.body}`,
    
  },
  colors: {
    brand: {
      100: "#E5E5E5",
      200:"#F8F9FB",
      300:"#00162E",
      400:"#8087A4",
      500:"#37446E",
      600:"#E74861",
      700:"#000000",
      800:"#FFFFFF",
      
    },

  },
  
});

export default theme;