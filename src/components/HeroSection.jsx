import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">안녕하세요 조가랍입니다.</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">여기에 소개 내용을 적습니다.</p>
                </div>
                <div className="col-span-5">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative">
                        <Image
                            src="/images/조가람.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>

                </div>
            </div>


        </section>
    );
};

export default HeroSection;