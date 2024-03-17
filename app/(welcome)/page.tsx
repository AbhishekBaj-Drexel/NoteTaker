import { Footer } from "./_components/footer";
import { IntroHeading } from "./_components/heading";
import { Images } from "./_components/images";

const WelcomePage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <IntroHeading />
        <Images />
      </div>
      <Footer />
    </div>
  );
}

export default WelcomePage;
