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
  {
    name: "Snapchat",
    urlPattern: /https:\/\/(www\.)?snapchat\.com\/(add\/([^/?#&]+)|story\/([^/?#&]+))/,
    appScheme: (match: string[]) => {
      if (match[3]) {
        return `snapchat://add/${match[3]}`; // Snapchat profile deep link
      }
      if (match[4]) {
        return `snapchat://story/${match[4]}`; // Snapchat story deep link
      }
      return `snapchat://`; // Fallback to Snapchat app
    },
    webFallback: (match: string[]) => `https://www.snapchat.com/${match[2]}`, // Web fallback
  },
  {
    name: "Telegram",
    urlPattern: /https:\/\/(www\.)?t\.me\/([^/?#&]+)/,
    appScheme: (match: string[]) => `tg://resolve?domain=${match[2]}`, // Telegram deep link for profiles/channels
    webFallback: (match: string[]) => `https://t.me/${match[2]}`, // Web fallback
  },
  {
    name: 'Spotify',
    urlPattern:
      /https:\/\/(open\.)?spotify\.com\/(track\/([^/?#&]+)|album\/([^/?#&]+)|playlist\/([^/?#&]+)|user\/([^/?#&]+))/,
    appScheme: (match: string[]) => {
      if (match[3]) return `spotify://track/${match[3]}`; // Spotify track deep link
      if (match[4]) return `spotify://album/${match[4]}`; // Spotify album deep link
      if (match[5]) return `spotify://playlist/${match[5]}`; // Spotify playlist deep link
      if (match[6]) return `spotify://user/${match[6]}`; // Spotify user deep link
      return null; // Fallback in case no valid match
    },
    webFallback: (match: string[]) => `https://open.spotify.com/${match[2]}`, // Web fallback URL
  },
  {
    name: 'Netflix',
    urlPattern:
      /https:\/\/(www\.)?netflix\.com\/(title\/([^/?#&]+)|browse|search\/([^/?#&]+))/,
    appScheme: (match: string[]) => {
      if (match[3]) return `nflx://www.netflix.com/title/${match[3]}`; // Netflix title deep link
      if (match[4]) return `nflx://www.netflix.com/search?q=${match[4]}`; // Netflix search deep link
      return `nflx://www.netflix.com/browse`; // Netflix browse deep link
    },
    webFallback: (match: string[]) => {
      if (match[3]) return `https://www.netflix.com/title/${match[3]}`; // Web fallback for title
      if (match[4]) return `https://www.netflix.com/search?q=${match[4]}`; // Web fallback for search
      return `https://www.netflix.com/browse`; // Web fallback for browse
    },
  },
  {
    name: 'YouTube Music',
    urlPattern:
      /https:\/\/(music\.)?youtube\.com\/(watch\?v=[^&]+|playlist\?list=[^&]+)/,
    appScheme: (match: string[]) => {
      if (match[2].startsWith("watch?v=")) {
        const videoId = match[2].split("v=")[1];
        return `com.google.android.apps.youtube.music://watch?v=${videoId}`; // Deep link for YouTube Music video/song
      } else if (match[2].startsWith("playlist?list=")) {
        const playlistId = match[2].split("list=")[1];
        return `com.google.android.apps.youtube.music://playlist?list=${playlistId}`; // Deep link for YouTube Music playlist
      }
      return `https://music.youtube.com/${match[2]}`; // Fallback link
    },
    webFallback: (match: string[]) => `https://music.youtube.com/${match[2]}`,
  },
  {
    name: 'Threads',
    urlPattern:
      /https:\/\/(www\.)?threads\.net\/(@[^/?#&]+|([^/?#&]+)\/posts\/([^/?#&]+))/,
    appScheme: (match: string[]) => {
      if (match[1]) {
        return `threads://user?username=${match[1].replace('@', '')}`; // Deep link for Threads user profile
      } else if (match[3]) {
        return `threads://post/${match[3]}`; // Deep link for Threads post
      }
      return `https://threads.net/${match[0]}`; // Fallback link
    },
    webFallback: (match: string[]) => `https://threads.net/${match[0]}`,
  },
  {
    name: "Twitch",
    urlPattern: /https:\/\/(www\.)?twitch\.tv\/([^/?#&]+)/,
    appScheme: (match: string[]) => `twitch://stream/${match[2]}`, // Deep link to Twitch stream/channel
    webFallback: (match: string[]) => `https://www.twitch.tv/${match[2]}`, // Fallback to web if app is not available
  },
  {
    name: "Alibaba",
    urlPattern: /https:\/\/(www\.)?alibaba\.com\/(product-detail\/[^/?#&]+|[^/?#&]+)/,
    appScheme: (match: string[]) => {
      if (match[2].startsWith("product-detail")) {
        return `alibaba://product/${match[2].split("/")[1]}`; // Deep link to specific product
      }
      return `alibaba://home`; // General deep link to Alibaba home page
    },
    webFallback: (match: string[]) => `https://www.alibaba.com/${match[2]}`, // Fallback to web version
  },
  {
    name: "Zomato",
    urlPattern: /https:\/\/(www\.)?zomato\.com\/(restaurant\/[^/?#&]+|[^/?#&]+)/,
    appScheme: (match: string[]) => {
      if (match[2].startsWith("restaurant/")) {
        return `zomato://restaurant/${match[2].split("/")[1]}`; // Deep link to specific restaurant
      }
      return `zomato://home`; // General deep link to Zomato home page
    },
    webFallback: (match: string[]) => `https://www.zomato.com/${match[2]}`, // Fallback to web version
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


// Example function for handling redirect
const openLink = (url: string) => {
  const { appDeepLink, fallbackLink } = getAppLink(url);
  let appOpened = false;

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      appOpened = true;
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);

  // if (isMobile() && appDeepLink) {
  //   if (isIOS()) {
  //     window.location.href = fallbackLink;
  //   } else {
  //     window.location.href = appDeepLink;
  //     setTimeout(() => {
  //       if (!appOpened) {
  //         window.location.href = fallbackLink;
  //       }
  //     }, 2000);
  //   }
  // } else {
  //   window.location.href = fallbackLink;
  // }

  if (isMobile() && appDeepLink) {
    if (isIOS()) {
      window.open(appDeepLink, '_system'); // Open app scheme on iOS
    } else {
      window.location.href = appDeepLink; // Open app scheme on Android
      setTimeout(() => {
        if (!appOpened) {
          window.location.href = fallbackLink;
        }
      }, 2000);
    }
  } else {
    window.location.href = fallbackLink;
  }

  // Cleanup event listener
  return () => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };
};
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
