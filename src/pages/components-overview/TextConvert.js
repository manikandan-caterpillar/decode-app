import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from '../../components/MainCard';
import ComponentSkeleton from './ComponentSkeleton';
import { ConvertCase } from '../../components/convertcase';

// ===============================|| SHADOW BOX ||=============================== //

function ShadowBox({ textConvert }) {
    return (
        <MainCard border={false} sx={{ boxShadow: textConvert }}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
                <Typography variant="h6">boxShadow</Typography>
                <Typography variant="subtitle1">{textConvert}</Typography>
            </Stack>
        </MainCard>
    );
}

ShadowBox.propTypes = {
    textConvert: PropTypes.string.isRequired
};

// ===============================|| CUSTOM - SHADOW BOX ||=============================== //

function CustomShadowBox({ textConvert, label, color, bgcolor }) {
    return (
        <MainCard border={false} sx={{ bgcolor: bgcolor || 'inherit', boxShadow: textConvert }}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
                <Typography variant="subtitle1" color={color}>
                    {label}
                </Typography>
            </Stack>
        </MainCard>
    );
}

CustomShadowBox.propTypes = {
    textConvert: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired
};

// ============================|| COMPONENT - SHADOW ||============================ //

const ComponentShadow = () => {
    const theme = useTheme();

    return (
        <ComponentSkeleton>
            <Grid container spacing={3}>
                <ConvertCase />
            </Grid>
        </ComponentSkeleton>
    );
};

export default ComponentShadow;
