import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// URL mappings for each platform with proper handling of various link types
const appLinkMappings = [
  {
    name: 'Instagram',
    urlPattern: /https:\/\/(www\.)?instagram\.com\/(reel\/([^/?#&]+)|p\/([^/?#&]+)|([^/?#&]+))/,
    appScheme: (match: string[]) => {
      if (match[5]) {
        return `instagram://user?username=${match[5]}`;
      }
      return `instagram://media?id=${match[3] || match[4]}`;
    },
    webFallback: (match: string[]) => `https://www.instagram.com/${match[2]}`,
  },
  {
    name: 'YouTube',
    urlPattern: /https:\/\/(www\.)?youtube\.com\/(watch\?v=[^&]+|channel\/[^/?#&]+|playlist\/[^/?#&]+)/,
    appScheme: (match: string[]) => {
      if (match[2].startsWith('watch?v=')) {
        const videoId = match[2].split('v=')[1];
        return `vnd.youtube://${videoId}`; // Deep link for YouTube videos in the app
      }
      return `https://www.youtube.com/${match[2]}`; // Web fallback for channels and playlists
    },
    webFallback: (match: string[]) => `https://www.youtube.com/${match[2]}`,
  }, 
  {
    name: 'Facebook',
    urlPattern: /https:\/\/(www\.)?facebook\.com\/(posts\/[^/?#&]+|pages\/[^/?#&]+|[^/?#&]+)/,
    appScheme: (match: string[]) => `fb://facewebmodal/f?href=${encodeURIComponent(match[0])}`,
    webFallback: (match: string[]) => `https://www.facebook.com/${match[2]}`,
  },
  {
    name: 'LinkedIn',
    urlPattern: /https:\/\/(www\.)?linkedin\.com\/(in\/[^/?#&]+|company\/[^/?#&]+|jobs\/view\/[^/?#&]+|posts\/[^/?#&]+)/,
    appScheme: (match: string[]) => {
      if (match[2].startsWith('in/')) {
        return `linkedin://in/${match[2].split('/')[1]}`; // Deep link for profiles
      }
      return `https://www.linkedin.com/${match[2]}`; // Web fallback for jobs, posts, company pages
    },
    webFallback: (match: string[]) => `https://www.linkedin.com/${match[2]}`,
  },  
  {
    name: 'X (Twitter)',
    urlPattern: /https:\/\/(www\.)?twitter\.com\/(i\/status\/([^/?#&]+)|hashtag\/([^/?#&]+)|([^/?#&]+))/,
    appScheme: (match: string[]) => {
      if (match[3]) return `twitter://status/${match[3]}`;
      if (match[4]) return `twitter://hashtag/${match[4]}`;
      return `twitter://user?screen_name=${match[5]}`;
    },
    webFallback: (match: string[]) => `https://www.twitter.com/${match[2]}`,
  }
];

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
      console.log(`App Deep Link: ${appDeepLink}, Web Fallback: ${fallbackLink}`);
      return {
        appDeepLink,
        fallbackLink,
      };
    }
  }
  console.warn('No matching app link found, using original URL:', url);
  return { fallbackLink: url };
}

// Open the app or fallback to browser
function openLink(url: string) {
  const { appDeepLink, fallbackLink } = getAppLink(url);

  let appOpened = false;

  function handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      appOpened = true; 
    }
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);

  if (isMobile() && appDeepLink) {
    window.location.href = appDeepLink;
    setTimeout(() => {
      if (!appOpened) {
        window.location.href = fallbackLink;
      }
    }, 2000);
  } else {
    window.location.href = fallbackLink;
  }
}

// Component for redirection
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
      </div>
    </div>
  );
};

export default Redirect;
