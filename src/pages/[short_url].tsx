import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {}
const Redirect: React.FC<Props> = () => {
  const router = useRouter()

  const getReDirectLink = async (shortUrl: any) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`);
      console.log({ link: response.data });
      if(response.data.redirectUrl){
        console.log("inside the if statement");
        
          router.push(response.data.redirectUrl)
      }else{
        console.log("out of the if statement");
        
      }
      // Handle the redirect or any other logic here
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
        <Image src="/images/Logo.svg" alt="Logo" height={100} width={300}/>
      </div>
    </div>
  );
};

export default Redirect