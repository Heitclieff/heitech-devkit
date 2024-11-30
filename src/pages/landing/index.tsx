import { FaDev } from "react-icons/fa";
import { HStack, VStack } from "@/components/layout";
import logo from '@/assets/react.svg';

const LandingPage = () => {
    return (
        <article className="w-full h-screen bg-zinc-900">
            <VStack className="flex flex-col justify-center items-center space-y-4">
                <img src={logo} className="w-[50px] h-[50px]" loading='lazy' alt="logo" />
                <h1 className="text-white text-xl font-semibold">HeitTech Devkit</h1>
                <div className="text-gray-200 text-center">
                    <p>devkit setup with optimize React ViteJS & Shadcn UI</p>
                    <p>also react router & icon supported.</p>
                </div>
                <HStack className="max-w-fit w-fit text-white text-sm items-center">
                    <FaDev size={20} />
                    <p>developed by</p>
                    <a  className="hover:underline cursor-pointer" href="https://github.com/Heitclieff" target="_blank">Heitclieff</a>
                </HStack>
            </VStack>
        </article>
    )
}

export default LandingPage;