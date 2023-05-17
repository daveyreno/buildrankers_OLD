import BuildingMenu from "./components/BuildingMenu";
import BuildingRank from "./components/BuildingRank";

export default function BuildingLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <div className=''>
            <div className='flex items-center justify-center h-40 border-b md:h-48 lg:h-60'>
                <div className='flex flex-row justify-center w-full max-w-5xl p-4 lg:p-0'>
                    <div className='md:w-1/3'></div>
                    <div className='flex flex-col justify-center md:w-2/3'>
                        <h1 className='flex justify-center text-4xl font-extrabold tracking-tighter md:text-5xl'>One Barangaroo</h1>
                        <p className='flex justify-center md:mt-2 md:text-lg text-slate-500'>Sydney, Australia</p>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='w-full max-w-5xl p-4'>

                    {/* LEFT PANEL */}
                    <div className='flex flex-col gap-6 md:flex-row'>
                        <div className='flex flex-col w-full gap-4 md:-mt-48 md:w-1/3'>
                            <BuildingRank />
                            <BuildingMenu />
                        </div>

                        {/* RIGHT PANEL */}
                        <div className='w-full md:w-2/3'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}