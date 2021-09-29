import React from 'react';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LandingSection from '@ui/molecules/sections/LandingSection';
import LandingLine from '@ui/atoms/lines/LandingLine';

export default function Index() {

  // const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <>
      <Grid
        component='div'>
        <Grid item style={{
          // height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <Grid style={{ margin: 'auto', }}>
            <Grid style={{ textAlign: 'center' }}>
              <Typography
                style={{ fontWeight: 'bold', margin: 'auto', color: '#484848', background: 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #66ffa6 65%)', display: 'inline' }}
                variant={(matches ? 'h2' : 'h3')}
                component={(matches ? 'h2' : 'h3')}
                gutterBottom
                align='center'
                color='textPrimary'>
                Design-Publish-Explore-Schedule
              </Typography>
            </Grid>
            <Grid style={{ textAlign: 'center', marginTop: '24px' }}>
              <Typography
                style={{ fontWeight: 'bold', margin: 'auto', color: '#484848', background: 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #66ffa6 65%)', display: 'inline' }}
                variant={(matches ? 'h2' : 'h3')}
                component={(matches ? 'h2' : 'h3')}
                gutterBottom
                align='center'
                color='textPrimary'>
                Training Plans
              </Typography>
            </Grid>
            {/* <Grid>
              <Typography align='center'
                style={{ fontWeight: 'bold', margin: 'auto', color: '#484848', background: 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #66ffa6 65%)', display: 'inline' }}
                variant="h4" component="h4" gutterBottom>
                Design your Training Plans super easy and share it with the community
              </Typography>
            </Grid> */}
            <Grid style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '24px'
            }}>
              <Button style={{ backgroundColor: '#484848', color: '#66FFA6', margin: 'auto', marginBottom: '24px', fontWeight: 900, boxShadow: '5px 5px 5px rgb(0,178,72)' }} color='secondary' variant='contained' size='large'>Join Waiting List</Button>
            </Grid>
          </Grid>
          <Grid style={{ margin: '15px' }} >
              <img src='.\photo-1589828695526-c461b4ddc158.jpg'
                className='hideOnSmallScreen'
                style={{
                  height: '46.5rem',
                  width: '31.25rem',
                  opacity: '0.8',
                  boxShadow: '10px 10px 5px rgb(0,178,72)',
                }} />
            </Grid>
        </Grid>
        <LandingLine />
        <Grid item>
          <LandingSection
            imgURL='.\search.png'
            title='Explore Training Plans'
            description='Explore and Find Training Plans for all Levels and Sports' />
        </Grid>
        <LandingLine />
        <Grid item>
          <LandingSection
            imgURL='.\growth.png'
            title='Schedule Training Plans'
            description='Schedule Training Plans to Calendar and track your progress' />
        </Grid>
        <LandingLine />
        <Grid item>
          <LandingSection
            imgURL='.\tasks.png'
            title='Design and Publish Template Training Plans'
            description='Powerful Designer for Training plans' />
        </Grid>
      </Grid>
    </>
  );
}
