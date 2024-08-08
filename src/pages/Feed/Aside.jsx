import { CiSearch } from "react-icons/ci";

const Aside = () => {
  return (
    <div className="max-xl:hidden overflow-y-auto  ">
      <div>
        <div className="fixed top-1    z-50">
          <form className="relative   ml-8 ">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <CiSearch />
            </span>
            <input
              className="pl-10 pr-[100px] py-3 bg-[#202327] text-[#757575] rounded-full"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>

        <div className="ml-8 mt-20">
          <div className="bg-black p-4 rounded-xl border  border- border-[#2F3336] w-[85%]">
            <h2 className="text-lg font-bold">Go ad-free with Premium+</h2>
            <p className="text-sm mt-2">
              Subscribe to see less ads, unlock new features and if eligible,
              receive a share of ads revenue.
            </p>
            <button className="mt-4 px-4 py-2 bg-[#188CD8] hover:bg-[#1874C2] text-white rounded-full">
              Subscribe
            </button>
          </div>

          <div className="w-[85%] mt-5 max-w-md p-4 bg-black cursor-pointer rounded-xl border border-[#2F3336] text-white">
            <img src="paris.jpg" alt="" className="w-full rounded-t-xl " />

            <div className="p-4 cursor-pointer ">
              <h2 className="text-xl font-bold mb-4">Trends for you</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-500">Trending in Turkey</p>
                  <p className="font-bold">#deprem</p>
                  <p className="text-gray-500">48.4K posts</p>
                </div>

                <div>
                  <p className="text-gray-500">Trending in Turkey</p>
                  <p className="font-bold">#Lille - Fenerbahçe</p>
                  <p className="text-gray-500">6,221 posts</p>
                </div>

                <div>
                  <p className="text-gray-500">Trending in Turkey</p>
                  <p className="font-bold">#Temu</p>
                  <p className="text-gray-500">3,587 posts</p>
                </div>

                <div>
                  <p className="text-gray-500">Trending in Turkey</p>
                  <p className="font-bold">#cibiliyetsiz</p>
                  <p className="text-gray-500">10.3K posts</p>
                </div>

                <div>
                  <p className="text-gray-500">Trending in Turkey</p>
                  <p className="font-bold">Ebrar</p>
                  <p className="text-gray-500">27.7K posts</p>
                </div>

                <div>
                  <p className="text-gray-500">Trending in Turkey</p>
                  <p className="font-bold">Samet</p>
                  <p className="text-gray-500">3,978 posts</p>
                </div>

                <div>
                  <p className="text-gray-500">Trending in Turkey</p>
                  <p className="font-bold">Atatürk</p>
                  <p className="text-gray-500">50.7K posts</p>
                </div>

                <div>
                  <p className="text-gray-500">Trending in Turkey</p>
                  <p className="font-bold">#tiktokkapatılsın</p>
                  <p className="text-gray-500">36K posts</p>
                </div>

                <p className="text-blue-500 cursor-pointer">Show more</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-black p-4 rounded-xl border border-[#2F3336] w-[85%] mt-5">
              <h2 className="text-xl font-bold mb-4">Who to follow</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="phy.jpg"
                      alt="Physics Today"
                      className="rounded-full  w-14"
                    />
                    <div className="ml-3">
                      <p className="font-bold">Physics Today</p>
                      <p className="text-gray-500">@PhysicsToday</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-[#188CD8] hover:bg-[#1874C2] text-white rounded-full">
                    Follow
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="demet.png"
                      alt="Demet Evgar"
                      className="rounded-full  w-14"
                    />
                    <div className="ml-3">
                      <p className="font-bold">Demet Evgar</p>
                      <p className="text-gray-500">@dmtevgar</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-[#188CD8] hover:bg-[#1874C2] text-white rounded-full">
                    Follow
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="fitness.png"
                      alt="Anytime Fitness"
                      className="rounded-full w-14"
                    />
                    <div className="ml-3">
                      <p className="font-bold">Anytime Fitness</p>
                      <p className="text-gray-500">@AnytimeFitness</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-[#188CD8] hover:bg-[#1874C2] text-white rounded-full">
                    Follow
                  </button>
                </div>

                <p className="text-blue-500 cursor-pointer">Show more</p>
              </div>
            </div>

            <div className="text-gray-500 text-sm mt-3 w-[70%] mb-20">
              <p className="cursor-pointer">
                Terms of Service &nbsp; Privacy Policy &nbsp; Cookie Policy
                Imprint Accessibility &nbsp;Ads info More... &nbsp;© 2024 X
                Corp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
