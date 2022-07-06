// Values are exported in themes.scss file
// Import them into JS code with import themes from  '../../path/themes.scss';
declare module '*.scss' {
    const value: {
        white: string;
        grey50: string;
        grey100: string;
        grey200: string;
        grey300: string;
        grey400: string;
        grey500: string;
        grey600: string;
        grey700: string;
        grey800: string;
        grey900: string;
        black: string;
        // Primary colors
        pear50: string;
        pear100: string;
        pear300: string;
        pear500: string;
        pear700: string;
        pear900: string;
        // Secondary colors
        sky50: string;
        sky100: string;
        sky300: string;
        sky500: string;
        sky700: string;
        sky900: string;
        // Success colors
        successLight: string;
        success: stringa62a;
        successDark: string;
        // Error colors
        errorLight: string;
        error: string;
        errorDark: string;
        warningLight: string;
        warning: string;
        warningDark: string;
        // Info Colors
        infoLight: string;
        info: string;
        infoDark: string;
        //Primary Box Shadow Color
        primaryBoxShadowColor: string;
        //Misc
        gradient: string;
        skeleton: string;
    };
    export = value;
}
