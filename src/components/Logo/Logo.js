// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="" width="100" />
         *
         */
        <>
            <svg width="150" height="35" viewBox="0 0 118 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="22"
                    style={{ fontWeight: 'bold' }}
                    fill={theme.palette.info.dark}
                    fillOpacity="0.85"
                >
                Developer's Utilities
                </text>
                <defs>
                    <linearGradient id="paint0_linear" x1="8.62526" y1="14.0888" x2="5.56709" y2="17.1469" gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme.palette.primary.darker} />
                        <stop offset="0.9637" stopColor={theme.palette.primary.dark} stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="26.2675" y1="14.1279" x2="28.7404" y2="16.938" gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme.palette.primary.darker} />
                        <stop offset="1" stopColor={theme.palette.primary.dark} stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    );
};

export default Logo;
