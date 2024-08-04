import LeftHeroSec from "./LeftHeroSec";
import RightHeroSec from "./RightHeroSec";

const Hero = () => {
  return (
    <div className="flex items-start gap-4 pt-[130px] container flex-col lg:flex-row">
      <div className="basis-[50%]">
        <LeftHeroSec />
      </div>
      <div className="basis-[50%]">
        <RightHeroSec />
      </div>
    </div>
  );
};

export default Hero;
