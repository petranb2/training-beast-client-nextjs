import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

type LandingSectionType = {
    imgURL: string,
    title: string,
    description: string,
}

export default function LandingSection({ imgURL, title, description }: LandingSectionType) {
    return (
        <Box style={{ margin: '24px' }}>
            <Grid container  >
                <Grid item md lg={4} style={{
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <img src={imgURL} style={{
                        height: '200px',
                        width: '200px',
                        opacity: '0.8'
                    }} />
                </Grid>
                <Grid item md lg={8} style={{
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'left',
                }}>
                    <Grid container >
                        <Grid>
                            <Typography
                                style={{ margin: 'auto', fontWeight: 800, }}
                                variant="h4"
                                component="h4"
                                gutterBottom
                                color='textPrimary'>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography
                                style={{
                                    fontWeight: 'bold',
                                    color: '#484848',
                                    background: 'linear-gradient(180deg, rgba(255,255,255,0) 65%, #66ffa6 65%)',
                                    display: 'inline'
                                }}
                                variant="h5"
                                component="h5"
                                gutterBottom>
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
