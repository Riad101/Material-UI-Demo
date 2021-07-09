import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=> ({
    container: {
        background: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icons: {
        marginRight: '20px'

    },
    buttons: {
        marginTop: '40px'

    }

}));
export default useStyles;