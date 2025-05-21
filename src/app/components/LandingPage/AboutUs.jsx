import Image from "next/image";
import AboutImage from '../../../../public/images/AboutUs.png'
import AboutLine from '../../../../public/images/About.svg'

export default function AboutUs() {
    return (
        <section className="flex  items-center justify-center gap-40 p-40">
              <div>
        <Image src={AboutImage} width={400} height={300} className="" alt="About" />
      </div>
   <div className="w-1/4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <div className="flex gap-6">
            <div>
            <Image src={AboutLine}  className="pt-4 w-[80px]" alt="AboutLine" />
            </div>
            <div>
            <ul className="space-y-8">
          <li>
            <h2 className="text-xl font-semibold text-gray-800">Mission</h2>
            <p className="mt-2  text-gray-600 leading-relaxed">
              At Zynspark, we empower startups by transforming bold ideas into impactful realities—driving growth, creativity, and long-term success every step of the way.
            </p>
          </li>
          
          <li>
            <h2 className="text-xl font-semibold text-gray-800">Vision</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">
              To be the leading creative partner for startups, shaping a future where every great idea gets the strategy, design, and momentum it needs to thrive.
            </p>
          </li>
        </ul>
            </div>
        </div>
       
      
      </div>
    
        </section>
   
    );
  }