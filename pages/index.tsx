import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 350,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export default function Index() {

  // const classes = useStyles();

  return (
    <>
      <Grid
        component='div'
        style={{
          fontWeight: 800
        }}
      >
        <Grid item style={{
          height: '85vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          position: 'relative'
        }}>
          <Grid container style={{
            margin: 'auto', display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
            <Grid>
              <Typography
                style={{ margin: 'auto', fontWeight: 800, }}
                variant="h2"
                component="h2"
                gutterBottom
                align='center'
                color='textPrimary'>
                Design-Publish-Explore-Schedule
              </Typography>
            </Grid>
            <Grid>
              <Typography
                style={{ margin: 'auto', fontWeight: 700 }}
                variant="h2"
                component="h2"
                gutterBottom
                align='center'
                color='textPrimary'>
                Training Plans
              </Typography>
            </Grid>
            <Grid>
              <Typography align='center' style={{ fontWeight: 'bold', color: '#484848', background: 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #66ffa6 65%)', display: 'inline' }} variant="h4" component="h4" gutterBottom>
                Design your Training Plans super easy and share it with the community
              </Typography>
            </Grid>
            <Grid>
              <Button color='secondary' variant='contained' size='large'>Start Build Workout Plans</Button>
            </Grid>
          </Grid>
          <Hidden only={['xs', 'sm']}>
            <Grid style={{ margin: '15px' }} >
              <img src='.\photo-1589828695526-c461b4ddc158.jpg' style={{
                height: '46.5rem',
                minWidth: '31.25rem',
                opacity: '0.8',
                boxShadow: '10px 10px 5px rgb(0,178,72)',
                // position: 'absolute',
                // right: '150px',
                // zIndex:-1
              }} />
            </Grid>
          </Hidden>
        </Grid>
        <hr style={{
          border: '10px solid #212121',
          borderRadius: '5px'
        }} />
        <Grid item>
          <Box border={5} borderRadius={20}>
            <Grid container>
              <Grid item md lg={4} style={{
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }} >
                <img src='.\search.png' style={{
                  height: '200px',
                  opacity: '0.8'
                }} />
              </Grid>
              <Grid item md lg={8} >
                <Grid container style={{
                  margin: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                  <Grid>
                    <Typography
                      style={{ margin: 'auto', fontWeight: 800, }}
                      variant="h2"
                      component="h2"
                      gutterBottom
                      align='center'
                      color='textPrimary'>
                      Design-Publish-Explore-Schedule
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      style={{ margin: 'auto', fontWeight: 700 }}
                      variant="h2"
                      component="h2"
                      gutterBottom
                      align='center'
                      color='textPrimary'>
                      Training Plans
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography align='center' style={{ fontWeight: 'bold', color: '#484848', background: 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #66ffa6 65%)', display: 'inline' }} variant="h4" component="h4" gutterBottom>
                      Design your Training Plans super easy and share it with the community
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>


        <hr style={{
          border: '5px solid #212121',
          borderRadius: '2px'
        }} />
        <Grid item>
          <Box border={5} borderRadius={20}>
            <Grid container>
              <Grid item md lg={8} >
                <Grid container style={{
                  margin: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                  <Grid>
                    <Typography
                      style={{ margin: 'auto', fontWeight: 800, }}
                      variant="h2"
                      component="h2"
                      gutterBottom
                      align='center'
                      color='textPrimary'>
                      Design-Publish-Explore-Schedule
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      style={{ margin: 'auto', fontWeight: 700 }}
                      variant="h2"
                      component="h2"
                      gutterBottom
                      align='center'
                      color='textPrimary'>
                      Training Plans
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography align='center' style={{ fontWeight: 'bold', color: '#484848', background: 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #66ffa6 65%)', display: 'inline' }} variant="h4" component="h4" gutterBottom>
                      Design your Training Plans super easy and share it with the community
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md lg={4} style={{
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }} >
                <img src='.\growth.png' style={{
                  height: '200px',
                  opacity: '0.8'
                }} />
              </Grid>
            </Grid>
          </Box>
        </Grid>



      </Grid>

    </>
  );
}
