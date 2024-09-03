// import React from 'react';
// import { Box, Grid, Typography, Button } from '@mui/material';
// import Card from '@/components/specific/JoinCard';
// import PersonIcon from '@mui/icons-material/Person';
// import StarIcon from '@mui/icons-material/Star';
// import { useRouter } from 'next/router';

// const Signup = () => {
//   const router = useRouter();

//   const handleInfluencerClick = () => {
//     router.push('/signup/influencer');
//   };

//   const handleBrandClick = () => {
//     router.push('/signup/brand');
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5, minHeight: '100vh' }}>
//       <Typography variant="h2" fontWeight="bold" align="center">
//         Join Linkfluencer
//       </Typography>
//       <Grid container spacing={4} sx={{ mt: 4, maxWidth: '800px' }}>
//         <Grid item xs={12} md={6}>
//           <Card title="Influencer" description="Make Everyday A Pay Day" icon={<PersonIcon fontSize="inherit" />} onClick={handleInfluencerClick} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card title="Brand" description="Take Your Brand To Public" icon={<StarIcon fontSize="inherit" />} onClick={handleBrandClick} />
//         </Grid>
//       </Grid>
//       <Typography variant="body2" sx={{ mt: 3 }}>
//         Already have an account?{' '}
//         <Button variant="text" color="primary">
//           Log In
//         </Button>
//       </Typography>
//     </Box>
//   );
// };

// export default Signup;
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '@/components/common/Logo'
function join() {
    const router = useRouter();
    const handleInfluencClick = () => {
      router.push('/signup/brand');
    };
    const handleBrandClick = () => {
        
        router.push('/signup/influencer');
    };
    return (
        <>
            <div className='flex justify-center items-center w-[100%] min-h-screen p-4'>
                <Logo/>
                <div>
                    <h2 className='text-4xl md:text-8xl mb-8'>Join <br /> Linkfluencer</h2>
                    <div className='flex flex-wrap  gap-3 '>
                        <div className='md:w-[370px] flex gap-2 border-black border rounded-2xl self-center  p-2 cursor-pointer ' onClick={handleBrandClick}>
                            <div className='self-center p-8 bg-gray-200 rounded-xl '>
                                <Image src='/images/Influencer.png'  alt="influencer" width={90} height={90} />
                            </div>
                            <div className='self-center'>
                                <h1 className='font-bold text-2xl'>Influencer</h1>
                                <p className='text-xl'>Make Everyday A Pay Day</p>
                                <Image className='float-right hover:rotate-45 duration-100' src='/images/Dark.png'  alt="influencer" width={40} height={40} />

                            </div>
                        </div>
                        <div className='md:w-[370px] flex gap-2 border-black border rounded-2xl self-center  p-2 cursor-pointer ' onClick={ handleInfluencClick}>

                            <div className='self-center p-8 bg-gray-200 rounded-xl '>
                                <Image src='/images/Brand.png' alt="brand" width={90} height={90} />
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>Brand</h1>
                                <p className='text-xl'>Take Your Brand To Public</p>
                                <Image className='float-right hover:rotate-45 duration-100' src='/images/Dark.png' alt="influencer" width={40} height={40} />
                            </div>
                        </div>
                    </div>
                    <h1 className='mt-4 text-xl'>Already have an account?<b className='cursor-pointer' onClick={()=>router.push('signin')}>Login</b></h1>
                </div>

            </div>
        </>
    )
}

export default join