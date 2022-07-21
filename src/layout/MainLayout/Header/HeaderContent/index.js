// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';
import Breadcrumbs from '../../../../components/@extended/Breadcrumbs';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = ({ navigation }) => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return (
        <>
            {/* {!matchesXs && <Search />} */}
            <Breadcrumbs navigation={navigation} title={false} titleBottom={false} card={false} divider={true} />
            {/* TODO */}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            {/* <Notification /> */}
            {/* {!matchesXs && <Profile />} */}
            {matchesXs && <MobileSection />}
        </>
    );
};

export default HeaderContent;
