import Image from "next/image";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-bgLight dark:bg-darkModeBg ">
      <Image
        src="/svg/logo-main-blue.svg"
        alt="logo"
        className="animate-pulse"
        width={300}
        height={65}
      />
    </div>
  );
};

export default LoadingSpinner;
