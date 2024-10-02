import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

// URL mappings for each platform with proper handling of various link types
const appLinkMappings = [
  {
    name: "Instagram",
    urlPattern:
      /https:\/\/(www\.)?instagram\.com\/(reel\/([^/?#&]+)|p\/([^/?#&]+)|([^/?#&]+))/,
    appScheme: (match: string[]) => {
      if (match[5]) {
        return `instagram://user?username=${match[5]}`;
      }
      return `instagram://media?id=${match[3] || match[4]}`;
    },
    webFallback: (match: string[]) => `https://www.instagram.com/${match[2]}`,
  },
  {
    name: "YouTube",
    urlPattern:
      /https:\/\/(www\.)?youtube\.com\/(watch\?v=[^&]+|channel\/[^/?#&]+|playlist\/[^/?#&]+)/,
    appScheme: (match: string[]) => {
      if (match[2].startsWith("watch?v=")) {
        const videoId = match[2].split("v=")[1];
        return `vnd.youtube://${videoId}`; // Deep link for YouTube videos in the app
      }
      return `https://www.youtube.com/${match[2]}`; // Web fallback for channels and playlists
    },
    webFallback: (match: string[]) => `https://www.youtube.com/${match[2]}`,
  },
  {
    name: "Facebook",
    urlPattern:
      /https:\/\/(www\.)?facebook\.com\/(posts\/[^/?#&]+|pages\/[^/?#&]+|[^/?#&]+)/,
    appScheme: (match: string[]) =>
      `fb://facewebmodal/f?href=${encodeURIComponent(match[0])}`,
    webFallback: (match: string[]) => `https://www.facebook.com/${match[2]}`,
  },
  {
    name: "LinkedIn",
    urlPattern:
      /https:\/\/(www\.)?linkedin\.com\/(in\/[^/?#&]+|company\/[^/?#&]+|jobs\/view\/[^/?#&]+|posts\/[^/?#&]+)/,
    appScheme: (match: string[]) => {
      if (match[2].startsWith("in/")) {
        return `linkedin://in/${match[2].split("/")[1]}`; // Deep link for profiles
      }
      return `https://www.linkedin.com/${match[2]}`; // Web fallback for jobs, posts, company pages
    },
    webFallback: (match: string[]) => `https://www.linkedin.com/${match[2]}`,
  },
  {
    name: "X (Twitter)",
    urlPattern:
      /https:\/\/(www\.)?twitter\.com\/(i\/status\/([^/?#&]+)|hashtag\/([^/?#&]+)|([^/?#&]+))/,
    appScheme: (match: string[]) => {
      if (match[3]) return `twitter://status/${match[3]}`;
      if (match[4]) return `twitter://hashtag/${match[4]}`;
      return `twitter://user?screen_name=${match[5]}`;
    },
    webFallback: (match: string[]) => `https://www.twitter.com/${match[2]}`,
  },
  {
    name: 'TikTok',
    urlPattern: /https:\/\/(www\.)?tiktok\.com\/(@[^/?#&]+\/video\/([^/?#&]+)|(@[^/?#&]+)|([^/?#&]+))/,
    appScheme: (match: string[]) => {
      if (match[3]) {
        return `snssdk1128://aweme/detail/${match[3]}`; // TikTok video deep link
      }
      if (match[4]) {
        return `snssdk1128://user/profile/${match[4].replace('@', '')}`; // TikTok profile deep link
      }
      return `snssdk1128://feed`; // Fallback to TikTok feed in app
    },
    webFallback: (match: string[]) => `https://www.tiktok.com/${match[2]}`,
  },
];

// Detect if the user is on iOS
function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Detect if the user is on mobile
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// Generate deep link or fallback link
function getAppLink(url: string) {
  for (let app of appLinkMappings) {
    const match = url.match(app.urlPattern);
    if (match) {
      const appDeepLink = app.appScheme(match);
      const fallbackLink = app.webFallback(match);
      console.log(
        `App Deep Link: ${appDeepLink}, Web Fallback: ${fallbackLink}`
      );
      return {
        appDeepLink,
        fallbackLink,
      };
    }
  }
  console.warn("No matching app link found, using original URL:", url);
  return { fallbackLink: url };
}

// Open the app or fallback to browser
// function openLink(url: string) {
//   const { appDeepLink, fallbackLink } = getAppLink(url);

//   let appOpened = false;

//   function handleVisibilityChange() {
//     if (document.visibilityState === "hidden") {
//       appOpened = true;
//     }
//   }

//   document.addEventListener("visibilitychange", handleVisibilityChange);

//   if (isMobile() && appDeepLink) {
//     // On iOS, we might need a different approach
//     if (isIOS()) {
//       // Open Universal Links for iOS
//       window.location.href = fallbackLink;
//     } else {
//       // Try app deep link on Android
//       window.location.href = appDeepLink;
//       setTimeout(() => {
//         if (!appOpened) {
//           window.location.href = fallbackLink;
//         }
//       }, 2000);
//     }
//   } else {
//     window.location.href = fallbackLink;
//   }
// }

function openLink(url: string) {
  const { appDeepLink, fallbackLink } = getAppLink(url);
  const key = `${url}-redirected`;

  // Check if the user has already been prompted
  const hasBeenRedirected = localStorage.getItem(key);

  let appOpened = false;

  function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      appOpened = true;
      localStorage.setItem(key, 'true'); // Store in localStorage to prevent future prompts
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);

  if (!hasBeenRedirected) {
    // If it's a mobile device and the appDeepLink exists, try opening the app
    if (isMobile() && appDeepLink) {
      window.location.href = appDeepLink; // Attempt to open the app
      setTimeout(() => {
        if (!appOpened) {
          window.location.href = fallbackLink; // Fallback to web if the app isn't opened
        }
      }, 2000); // Allow time for the app to open
    } else {
      window.location.href = fallbackLink;
    }
  } else {
    // If the user has been prompted already, go straight to the fallback link
    window.location.href = fallbackLink;
  }
}

// Example function for handling redirect
const Redirect: React.FC = () => {
  const router = useRouter();

  const getReDirectLink = async (shortUrl: string) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`);
      if (response.data.redirectUrl) {
        openLink(response.data.redirectUrl);
      } else {
        console.warn("No redirect URL found");
      }
    } catch (error) {
      console.error('Error fetching redirect link:', error);
    }
  };

  useEffect(() => {
    const { short_url } = router.query;
    if (short_url) {
      getReDirectLink(short_url as string);
      
    }
  }, [router.query]);
  return (
    <div className="border h-screen flex items-center justify-center">
      <div className="flex justify-center items-center">
        {/* Add your logo here */}
        <Image src="/images/Logo.svg" height={200} width={400} alt="logo"/>
      </div>
    </div>
  );
};

export default Redirect;
