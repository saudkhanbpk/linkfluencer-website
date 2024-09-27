// import Image from "next/image";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// interface Props {}
// const Redirect: React.FC<Props> = () => {
//   const router = useRouter()

//   const getReDirectLink = async (shortUrl: any) => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`);
//       console.log({ link: response.data });
//       if(response.data.redirectUrl){
//         console.log("inside the if statement");
        
//           router.push(response.data.redirectUrl)
//       }else{
//         console.log("out of the if statement");
        
//       }
//       // Handle the redirect or any other logic here
//     } catch (error) {
//       console.error('Error fetching redirect link:', error);
//     }
//   };


//   useEffect(() => {
//     const { short_url } = router.query;

//     if (short_url) {
//       // Call your function to handle redirection or fetch the link
//       getReDirectLink(short_url);
//     }
//   }, [router.query]); // Add router.query as a dependency


//   return (
//     <div className="border h-screen flex items-center justify-center">
//       <div className="flex justify-center items-center">
//         <Image src="/images/Logo.svg" alt="Logo" height={100} width={300}/>
//       </div>
//     </div>
//   );
// };

// export default Redirect
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {}

const appLinkMappings = [
  {
    name: 'Instagram',
    urlPattern: /https:\/\/(www\.)?instagram\.com\/(.+)/,
    appScheme: 'instagram://user?username=',
    webFallback: 'https://www.instagram.com/',
  },
  {
    name: 'YouTube',
    urlPattern: /https:\/\/(www\.)?youtube\.com\/watch\?v=([^&]+)/,
    appScheme: 'youtube://',
    webFallback: 'https://www.youtube.com/watch?v=',
  },
  {
    name: 'Facebook',
    urlPattern: /https:\/\/(www\.)?facebook\.com\/(.+)/,
    appScheme: 'fb://profile/',
    webFallback: 'https://www.facebook.com/',
  },
  // Add other apps and their URL patterns here
];

// Detect if the user is on a mobile device
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Generate deep link for app and fallback to browser
function getAppLink(url: string) {
  for (let app of appLinkMappings) {
    const match = url.match(app.urlPattern);
    if (match) {
      const appDeepLink = app.appScheme + match[2];
      return {
        appDeepLink,
        fallbackLink: app.webFallback + match[2],
      };
    }
  }
  return { fallbackLink: url };
}

// Open the app link or fallback to browser
function openLink(url: string) {
  const { appDeepLink, fallbackLink } = getAppLink(url);

  if (isMobile() && appDeepLink) {
    window.location.href = appDeepLink;
    setTimeout(() => {
      window.location.href = fallbackLink;
    }, 1500); // Wait 1.5s to fall back if the app isn't installed
  } else {
    window.location.href = fallbackLink;
  }
}

const Redirect: React.FC<Props> = () => {
  const router = useRouter();

  const getReDirectLink = async (shortUrl: any) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`);
      console.log({ link: response.data });
      
      if (response.data.redirectUrl) {
        console.log("inside the if statement");
        openLink(response.data.redirectUrl);  // Handle app deep linking and fallback to browser here
      } else {
        console.log("out of the if statement");
      }
    } catch (error) {
      console.error('Error fetching redirect link:', error);
    }
  };

  useEffect(() => {
    const { short_url } = router.query;

    if (short_url) {
      // Call your function to handle redirection or fetch the link
      getReDirectLink(short_url);
    }
  }, [router.query]); // Add router.query as a dependency

  return (
    <div className="border h-screen flex items-center justify-center">
      <div className="flex justify-center items-center">
        <Image src="/images/Logo.svg" alt="Logo" height={100} width={300} />
      </div>
    </div>
  );
};

export default Redirect;
