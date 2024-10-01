
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {}


// Detect if the user is on a mobile device
const appLinkMappings = [
  {
    name: 'Instagram',
    urlPattern: /https:\/\/(www\.)?instagram\.com\/([^/?#&]+)/,
    appScheme: 'instagram://',
    webFallback: 'https://www.instagram.com/',
  },
  {
    name: 'YouTube',
    urlPattern: /https:\/\/(www\.)?youtube\.com\/watch\?v=([^&]+)/,
    appScheme: 'youtube://watch?v=',
    webFallback: 'https://www.youtube.com/watch?v=',
  },
  {
    name: 'Facebook',
    urlPattern: /https:\/\/(www\.)?facebook\.com\/([^/?#&]+)/,
    appScheme: 'fb://faceweb/f?href=',
    webFallback: 'https://www.facebook.com/',
  },
  {
    name: 'Amazon',
    urlPattern: /https:\/\/(www\.)?amazon\.com\/(?:.+\/)?(dp|gp|product)\/([^/?#&]+)/,
    appScheme: 'amazon://',
    webFallback: 'https://www.amazon.com/',
  },
  {
    name: 'LinkedIn',
    urlPattern: /https:\/\/(www\.)?linkedin\.com\/in\/([^/?#&]+)/,
    appScheme: 'linkedin://in/',
    webFallback: 'https://www.linkedin.com/in/',
  },
  {
    name: 'Twitter',
    urlPattern: /https:\/\/(www\.)?twitter\.com\/([^/?#&]+)/,
    appScheme: 'twitter://',
    webFallback: 'https://www.twitter.com/',
  },
  {
    name: 'Telegram',
    urlPattern: /https:\/\/(www\.)?t\.me\/([^/?#&]+)/,
    appScheme: 'tg://',
    webFallback: 'https://t.me/',
  },
];

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
  
  // Detect if the user has left the page (which indicates the app was opened)
  let appOpened = false;
  
  function handleVisibilityChange() {
    if (document.hidden) {
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
    }, 1500);  // Wait for 1.5 seconds before triggering the fallback
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
