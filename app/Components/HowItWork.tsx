import Image from "next/image";
import ImageSection from "../../public/how-it-work.avif";

const HowItWork = () => {
  return (
    <div className="padding-container max-container max-md:mt-10">
      <Image
        src={ImageSection}
        alt="how_it_work_image"
        className=" w-full h-full object-center "
        width={10000}
        height={10000}
      />
    </div>
  );
};

export default HowItWork;
