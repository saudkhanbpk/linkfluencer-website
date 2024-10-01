// // import Image from "next/image";
// // import { useEffect } from "react";
// // import { useRouter } from "next/router";
// // import axios from "axios";

// // interface Props {}
// // const Redirect: React.FC<Props> = () => {
// //   const router = useRouter()

// //   const getReDirectLink = async (shortUrl: any) => {
// //     try {
// //       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`);
// //       console.log({ link: response.data });
// //       if(response.data.redirectUrl){
// //         console.log("inside the if statement");
        
// //           router.push(response.data.redirectUrl)
// //       }else{
// //         console.log("out of the if statement");
        
// //       }
// //       // Handle the redirect or any other logic here
// //     } catch (error) {
// //       console.error('Error fetching redirect link:', error);
// //     }
// //   };


// //   useEffect(() => {
// //     const { short_url } = router.query;

// //     if (short_url) {
// //       // Call your function to handle redirection or fetch the link
// //       getReDirectLink(short_url);
// //     }
// //   }, [router.query]); // Add router.query as a dependency


// //   return (
// //     <div className="border h-screen flex items-center justify-center">
// //       <div className="flex justify-center items-center">
// //         <Image src="/images/Logo.svg" alt="Logo" height={100} width={300}/>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Redirect
// import Image from "next/image";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

// interface Props {}

// // Detect if the user is on a mobile device
// const appLinkMappings = [
//   {
//     name: 'Instagram',
//     urlPattern: /https:\/\/(www\.)?instagram\.com\/(p\/[^/?#&]+|[^/?#&]+)/,
//     appScheme: 'instagram://user?username=',
//     webFallback: 'https://www.instagram.com/',
//   },
//   {
//     name: 'YouTube',
//     urlPattern: /https:\/\/(www\.)?youtube\.com\/watch\?v=([^&]+)/,
//     appScheme: 'youtube://',
//     webFallback: 'https://www.youtube.com/watch?v=',
//   },
//   {
//     name: 'Facebook',
//     urlPattern: /https:\/\/(www\.)?facebook\.com\/([^/?#&]+)/,
//     appScheme: 'fb://profile/',
//     webFallback: 'https://www.facebook.com/',
//   },
//   {
//     name: 'Amazon',
//     urlPattern: /https:\/\/(www\.)?amazon\.com\/(?:.+\/)?dp\/([A-Z0-9]{10})/,
//     appScheme: 'amazon://detail?asin=',
//     webFallback: 'https://www.amazon.com/dp/',
//   },
//   {
//     name: 'LinkedIn',
//     urlPattern: /https:\/\/(www\.)?linkedin\.com\/in\/([^/?#&]+)/,
//     appScheme: 'linkedin://in/',
//     webFallback: 'https://www.linkedin.com/in/',
//   },
//   {
//     name: 'Twitter',
//     urlPattern: /https:\/\/(www\.)?twitter\.com\/([^/?#&]+)/,
//     appScheme: 'twitter://user?screen_name=',
//     webFallback: 'https://www.twitter.com/',
//   },
// ];

// function isMobile() {
//   return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// }

// // Generate deep link for app and fallback to browser
// function getAppLink(url: string) {
//   for (let app of appLinkMappings) {
//     const match = url.match(app.urlPattern);
//     if (match) {
//       const appDeepLink = app.appScheme + match[2];
//       return {
//         appDeepLink,
//         fallbackLink: app.webFallback + match[2],
//       };
//     }
//   }
//   return { fallbackLink: url };
// }

// // Open the app link or fallback to browser
// function openLink(url: string) {
//   const { appDeepLink, fallbackLink } = getAppLink(url);
  
//   // Detect if the user has left the page (which indicates the app was opened)
//   let appOpened = false;
  
//   function handleVisibilityChange() {
//     if (document.hidden) {
//       appOpened = true;  // The user left the page (likely opened the app)
//     }
//   }

//   // Add visibility change listener
//   document.addEventListener("visibilitychange", handleVisibilityChange);

//   if (isMobile() && appDeepLink) {
//     // Attempt to open the app
//     window.location.href = appDeepLink;

//     // Set a timeout to fallback to the browser version if the app isn't opened
//     setTimeout(() => {
//       if (!appOpened) {
//         // If the user didn't leave the page, fallback to the browser
//         window.location.href = fallbackLink;
//       }
//     }, 1500);  // Wait for 1.5 seconds before triggering the fallback
//   } else {
//     // If not on mobile or no app deep link, open the fallback link in the browser
//     window.location.href = fallbackLink;
//   }
// }

// const Redirect: React.FC<Props> = () => {
//   const router = useRouter();

//   const getReDirectLink = async (shortUrl: any) => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`);
//       console.log({ link: response.data });
      
//       if (response.data.redirectUrl) {
//         console.log("inside the if statement");
//         openLink(response.data.redirectUrl);  // Handle app deep linking and fallback to browser here
//       } else {
//         console.log("out of the if statement");
//       }
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
//         <Image src="/images/Logo.svg" alt="Logo" height={100} width={300} />
//       </div>
//     </div>
//   );
// };

// export default Redirect;

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {}

// Mapping URL patterns to app schemes and fallbacks
const appLinkMappings = [
  // {
  //   name: 'Instagram',
  //   urlPattern: /https:\/\/(www\.)?instagram\.com\/(reel\/[^/?#&]+|p\/[^/?#&]+|[^/?#&]+)/,
  //   appScheme: 'instagram://user?username=',
  //   webFallback: 'https://www.instagram.com/',
  // }, 
  {
    name: 'Instagram',
    urlPattern: /https:\/\/(www\.)?instagram\.com\/(reel\/([^/?#&]+)|p\/([^/?#&]+)|([^/?#&]+))/,
    appScheme: 'instagram://media?id=',
    webFallback: 'https://www.instagram.com/',
  }, 
  {
    name: 'YouTube',
    urlPattern: /https:\/\/(www\.)?youtube\.com\/(watch\?v=[^&]+|playlist\?list=[^&]+|channel\/[^/?#&]+)/,
    appScheme: 'youtube://',
    webFallback: 'https://www.youtube.com/',
  },  
  {
    name: 'Facebook',
    urlPattern: /https:\/\/(www\.)?facebook\.com\/(posts|pages|[^/?#&]+)/,
    appScheme: 'fb://',
    webFallback: 'https://www.facebook.com/',
  },  
  {
    name: 'Amazon',
    urlPattern: /https:\/\/(www\.)?amazon\.com\/(?:.+\/)?dp\/([A-Z0-9]{10})/,
    appScheme: 'amazon://detail?asin=',
    webFallback: 'https://www.amazon.com/dp/',
  },
  {
    name: 'LinkedIn',
    urlPattern: /https:\/\/(www\.)?linkedin\.com\/(in\/[^/?#&]+|company\/[^/?#&]+|jobs\/view\/[^/?#&]+|posts\/[^/?#&]+)/,
    appScheme: 'linkedin://',
    webFallback: 'https://www.linkedin.com/',
  },  
  {
    name: 'Twitter',
    urlPattern: /https:\/\/(www\.)?twitter\.com\/(i\/status\/[^/?#&]+|hashtag\/[^/?#&]+|[^/?#&]+)/,
    appScheme: 'twitter://',
    webFallback: 'https://www.twitter.com/',
  },  
];

// Detect if the user is on a mobile device
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Generate deep link for the app and fallback to browser
// function getAppLink(url: string) {
//   for (let app of appLinkMappings) {
//     const match = url.match(app.urlPattern);
//     if (match) {
//       const appDeepLink = app.appScheme + match[2];
//       return {
//         appDeepLink,
//         fallbackLink: app.webFallback + match[2],
//       };
//     }
//   }
//   return { fallbackLink: url };
// }

function getAppLink(url: string) {
  for (let app of appLinkMappings) {
    const match = url.match(app.urlPattern);
    if (match) {
      let appDeepLink;
      if (match[0].includes('/reel/')) {
        appDeepLink = `instagram://media?id=${match[2]}`; // Assuming you can extract the reel ID
      } else {
        appDeepLink = app.appScheme + match[2]; // For profiles
      }
      return {
        appDeepLink,
        fallbackLink: app.webFallback + match[2],
      };
    }
  }
  return { fallbackLink: url };
}


// Open the app link or fallback to the browser
function openLink(url: string) {
  const { appDeepLink, fallbackLink } = getAppLink(url);
  
  // Detect if the user has left the page (which indicates the app was opened)
  let appOpened = false;
  
  function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      appOpened = true;  // The user left the page (likely opened the app)
    }
  }

  // Add visibility change listener
  document.addEventListener("visibilitychange", handleVisibilityChange);

  if (isMobile() && appDeepLink) {
    // Attempt to open the app
    window.location.href = appDeepLink;

    // Set a timeout to fallback to the browser version if the app isn't opened
    setTimeout(() => {
      if (!appOpened) {
        // If the user didn't leave the page, fallback to the browser
        window.location.href = fallbackLink;
      }
    }, 2000);  // Wait for 2 seconds before triggering the fallback
  } else {
    // If not on mobile or no app deep link, open the fallback link in the browser
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
        console.log("Redirecting to:", response.data.redirectUrl);
        openLink(response.data.redirectUrl);  // Handle app deep linking and fallback to browser here
      } else {
        console.log("No redirect URL found");
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
  }, [router.query]);

  return (
    <div className="border h-screen flex items-center justify-center">
      <div className="flex justify-center items-center">
        <Image src="/images/Logo.svg" alt="Logo" height={100} width={300} />
      </div>
    </div>
  );
};

export default Redirect;
