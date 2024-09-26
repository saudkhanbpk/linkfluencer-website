import Image from "next/image";
import { useEffect } from "react";

interface Props {}
const Redirect: React.FC<Props> = () => {
  useEffect(() => {}, []);
  return (
    <div className="border h-screen flex items-center justify-center">
      <div className="flex justify-center items-center">
        <Image src="/images/Logo.svg" alt="Logo" height={100} width={300}/>
      </div>
    </div>
  );
};

export default Redirect