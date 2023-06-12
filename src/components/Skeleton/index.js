import React from 'react';
import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';

const SkeletonExample = () => {
  return (
    <Grid container spacing={2} style={{ height: 800 }}>
      <Grid item xs={6}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          style={{ height: '100%' }}
        >
          <Grid item>
            <Skeleton variant="rect" width={300} height={800} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item xs={12} sm={8} md={5} elevation={6}>
          <Grid item>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Skeleton variant="text" width={75} height={75} margin="normal" />
              <Skeleton
                variant="text"
                width={470}
                height={60}
                margin="normal"
              />
              <Skeleton
                variant="text"
                width={470}
                height={60}
                margin="normal"
              />
              <Skeleton
                variant="text"
                width={470}
                height={60}
                margin="normal"
              />
              <Skeleton
                variant="text"
                width={470}
                height={10}
                margin="normal"
              />
              <Skeleton
                variant="text"
                width={470}
                height={60}
                margin="normal"
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SkeletonExample;
