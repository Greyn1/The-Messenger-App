import Paper from '@mui/material/Paper';

const PageContent = (props) => {
    const styles = {
        padding: 0,
        margin: 0,
        backgroundColor: "#e3e2e2",
        height: "100vh",
        width: "100vw",
        overflowY:"auto"
    };

    return (
        <Paper style={styles} elevation={0}>
            {props.children}
        </Paper>
    );
}

export default PageContent;