import Paper from '@mui/material/Paper';

const PageContent = (props) => {
    const styles = {
        display:"flex",
        flexDirection:"column",
        padding: 0,
        margin: 0,
        backgroundColor: "#f2f2f2",
        height: "100vh",
        width: "100vw",
        overflowY:"auto",
    };

    return (
        <Paper style={styles} elevation={0}>
            {props.children}
        </Paper>
    );
}

export default PageContent;