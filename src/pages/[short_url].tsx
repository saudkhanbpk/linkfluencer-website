import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {}

// Mapping URL patterns to app schemes and fallbacks
const appLinkMappings = [
  {
    name: 'Instagram',
    urlPattern: /https:\/\/(www\.)?instagram\.com\/(reel\/([^/?#&]+)|p\/([^/?#&]+)|([^/?#&]+))/,
    appScheme: (match: string[]) => `instagram://media?id=${match[3] || match[4] || match[5]}`,  // Adjusted for media ID
    webFallback: (match: string[]) => `https://www.instagram.com/${match[0].split('/').slice(-1)[0]}/`,
  },  
  {
    name: 'YouTube',
    urlPattern: /https:\/\/(www\.)?youtube\.com\/(watch\?v=([^&]+)|playlist\?list=([^&]+)|channel\/([^/?#&]+))/,
    appScheme: (match: string[]) => `youtube://${match[3] || match[4] || match[5]}`,
    webFallback: (match: string[]) => `https://www.youtube.com/${match[0].split('/').slice(-1)[0]}`,
  },  
  {
    name: 'Facebook',
    urlPattern: /https:\/\/(www\.)?facebook\.com\/(posts|pages|[^/?#&]+)/,
    appScheme: (match: string[]) => `fb://facewebmodal/f?href=${encodeURIComponent(match[0])}`,
    webFallback: (match: string[]) => `https://www.facebook.com/${match[0].split('/').slice(-1)[0]}`,
  },  
  {
    name: 'Amazon',
    urlPattern: /https:\/\/(www\.)?amazon\.com\/(?:.+\/)?dp\/([A-Z0-9]{10})/,
    appScheme: (match: string[]) => `amazon://detail?asin=${match[1]}`,
    webFallback: (match: string[]) => `https://www.amazon.com/dp/${match[1]}`,
  },
  {
    name: 'LinkedIn',
    urlPattern: /https:\/\/(www\.)?linkedin\.com\/(in\/[^/?#&]+|company\/[^/?#&]+|jobs\/view\/[^/?#&]+|posts\/[^/?#&]+)/,
    appScheme: (match: string[]) => `linkedin://${match[2]}`,
    webFallback: (match: string[]) => `https://www.linkedin.com/${match[2]}`,
  },  
  {
    name: 'Twitter',
    urlPattern: /https:\/\/(www\.)?twitter\.com\/(i\/status\/([^/?#&]+)|hashtag\/([^/?#&]+)|([^/?#&]+))/,
    appScheme: (match: string[]) => `twitter://status/${match[3] || match[4]}`,
    webFallback: (match: string[]) => `https://www.twitter.com/${match[0].split('/').slice(-1)[0]}`,
  },  
];

// Detect if the user is on a mobile device
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Generate deep link for the app and fallback to browser
function getAppLink(url: string) {
  for (let app of appLinkMappings) {
    const match = url.match(app.urlPattern);
    if (match) {
      const appDeepLink = app.appScheme(match);
      const fallbackLink = app.webFallback(match);
      return {
        appDeepLink,
        fallbackLink,
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
