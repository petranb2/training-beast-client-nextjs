import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Link from '../src/ui/molecules/Link';
import Link from '@material-ui/core/Link';
import { useRouter } from 'next/router';

export default function Index() {
    const router = useRouter();
    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {router.query.username}
                </Typography>
                <Link href="/sign-in" color="secondary">
                    Go to the sign in page
                </Link>
            </Box>
        </Container>
    );
}
// This gets called on every request
export async function getServerSideProps(context: any) {
    // Fetch data from external API
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()
    console.log('-------');
    console.log(context.resolvedUrl[0])
    console.log(context.resolvedUrl[1])
    console.log(context.resolvedUrl.slice(2))
    if (context.resolvedUrl[1] !== '@') {
        console.log('not found route with @')
        // return {
        //     notFound: true,
        // }
    }
    console.log('-------');
    let data = true;
    // Pass data to the page via props
    return { props: { data } }
}