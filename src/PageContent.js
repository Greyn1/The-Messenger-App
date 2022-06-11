import Paper from '@mui/material/Paper';

const PageContent = (props) => {
    const styles = {
        display:"flex",
        flexDirection:"column",
        padding: 0,
        margin: 0,
        backgroundColor: "#f2f2f2",
        // height: "100%",
        minHeight: "90vh",
        width: "97vw",
        overflow: "hidden",
        border:"20px solid purple"
    };

    return (
        <Paper style={styles} elevation={0}>
            {props.children}
        </Paper>
    );
}

export default PageContent;