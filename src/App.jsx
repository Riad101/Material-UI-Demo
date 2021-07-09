import React from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';


const App = () =>{
    const classes = useStyles();
    return(
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icons} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className = {classes.container}>
                    <Container maxWidth ="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sunt excepturi porro ullam qui nihil deserunt doloribus deleniti cum quod aliquam esse accusantium, doloremque iure laudantium distinctio. Iste, magni dolore.
                        </Typography>
                    
                        <div className={classes.buttons}>
                            <Grid container spacing = {2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See My Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Actions
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing = {4}>
                        <Grid item>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image = "https://source.unsplash.com/random"
                                    title = "Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading 
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the content.
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </main>
        </>
    );
}

export default App;