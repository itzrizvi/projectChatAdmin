import React from "react";
import {
  Download,
  Edit2,
  Globe,
  Mail,
  Mic,
  MoreVertical,
  Share2,
} from "react-feather";
import profileImgEx from "../../Image/messageImg.jpeg";

const RightInfo = () => {
  return (
    <>
      <div className="info-content col-span-12 xl:col-span-3 flex flex-col overflow-hidden pl-6 xl:pl-0 pr-6">
        <div className="overflow-y-auto scrollbar-hidden py-6">
          {/* <!-- BEGIN: Profile --> */}
          <div className="intro-y box relative px-4 py-6">
            <span
              title="Settings"
              className="text-gray-600 tooltip w-8 h-8 block flex items-center justify-center absolute top-0 right-0 mr-1 mt-1"
            >
              {" "}
              <Edit2 className="w-4 h-4" />
            </span>
            <div className="w-20 h-20 mx-auto image-fit">
              <img
                alt="Topson Messenger Tailwind HTML Admin Template"
                className="rounded-full"
                src={profileImgEx}
              />
              <div className="bg-green-500 border-white w-3 h-3 absolute right-0 top-0 mt-1 mr-1 rounded-full border-2"></div>
            </div>
            <div className="text-base font-medium text-center mt-3">
              John Travolta
            </div>
            <div className="text-gray-600 text-center text-xs uppercase mt-0.5">
              Software Engineer
            </div>
          </div>
          {/* <!-- END: Profile --> */}
          {/* <!-- BEGIN: Detail Profile --> */}
          <div className="intro-y box p-4 mt-3 text-left">
            <div className="text-base font-medium">Personal Information</div>
            <div className="mt-4">
              <div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
                <div className="">
                  <div className="text-gray-600">Country</div>
                  <div className="mt-0.5">New York City, USA</div>
                </div>
                <Globe className="w-4 h-4 text-gray-600 ml-auto opacity-50" />
              </div>
              <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                <div className="">
                  <div className="text-gray-600">Phone</div>
                  <div className="mt-0.5">+32 19 23 62 24 34</div>
                </div>
                <Mic className="w-4 h-4 text-gray-600 ml-auto opacity-50" />
              </div>
              <div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
                <div className="">
                  <div className="text-gray-600">Email</div>
                  <div className="mt-0.5">johntravolta@left4code.com</div>
                </div>
                <Mail className="w-4 h-4 text-gray-600 ml-auto opacity-50" />
              </div>
            </div>
          </div>
          {/* <!-- END: Detail Profile --> */}
          {/* <!-- BEGIN: Shared Files --> */}
          <div className="intro-y h-full box flex flex-col p-4 mt-3 text-left">
            <div className="text-base font-medium">Shared Files</div>
            <div className="mt-4 overflow-x-hidden overflow-y-auto scrollbar-hidden">
              <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative ">
                <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                  <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    JPG
                  </div>
                </div>
                <div className="w-full ml-3">
                  <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                    Something Important
                  </div>
                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                    1.2 MB Image File
                  </div>
                </div>
                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                  <span
                    className="dropdown-toggle w-4 h-4"
                    aria-expanded="false"
                  >
                    {" "}
                    <MoreVertical className="w-4 h-4" />
                  </span>
                  <div className="dropdown-menu w-40">
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Share2 className="w-4 h-4 mr-2" />
                        Share{" "}
                      </span>
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Download className="w-4 h-4 mr-2" />
                        Download{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative ">
                <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                  <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    JPG
                  </div>
                </div>
                <div className="w-full ml-3">
                  <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                    Something Important
                  </div>
                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                    1.2 MB Image File
                  </div>
                </div>
                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                  <span
                    className="dropdown-toggle w-4 h-4"
                    aria-expanded="false"
                  >
                    {" "}
                    <MoreVertical className="w-4 h-4" />
                  </span>
                  <div className="dropdown-menu w-40">
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Share2 className="w-4 h-4 mr-2" />
                        Share{" "}
                      </span>
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Download className="w-4 h-4 mr-2" />
                        Download{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative ">
                <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                  <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    JPG
                  </div>
                </div>
                <div className="w-full ml-3">
                  <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                    Something Important
                  </div>
                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                    1.2 MB Image File
                  </div>
                </div>
                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                  <span
                    className="dropdown-toggle w-4 h-4"
                    aria-expanded="false"
                  >
                    {" "}
                    <MoreVertical className="w-4 h-4" />
                  </span>
                  <div className="dropdown-menu w-40">
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Share2 className="w-4 h-4 mr-2" />
                        Share{" "}
                      </span>
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Download className="w-4 h-4 mr-2" />
                        Download{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative ">
                <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                  <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    JPG
                  </div>
                </div>
                <div className="w-full ml-3">
                  <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                    Something Important
                  </div>
                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                    1.2 MB Image File
                  </div>
                </div>
                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                  <span
                    className="dropdown-toggle w-4 h-4"
                    aria-expanded="false"
                  >
                    {" "}
                    <MoreVertical className="w-4 h-4" />
                  </span>
                  <div className="dropdown-menu w-40">
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Share2 className="w-4 h-4 mr-2" />
                        Share{" "}
                      </span>
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Download className="w-4 h-4 mr-2" />
                        Download{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative ">
                <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                  <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    JPG
                  </div>
                </div>
                <div className="w-full ml-3">
                  <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                    Something Important
                  </div>
                  <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                    1.2 MB Image File
                  </div>
                </div>
                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                  <span
                    className="dropdown-toggle w-4 h-4"
                    aria-expanded="false"
                  >
                    {" "}
                    <MoreVertical className="w-4 h-4" />
                  </span>
                  <div className="dropdown-menu w-40">
                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Share2 className="w-4 h-4 mr-2" />
                        Share{" "}
                      </span>
                      <span className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        {" "}
                        <Download className="w-4 h-4 mr-2" />
                        Download{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END: Shared Files --> */}
        </div>
      </div>
    </>
  );
};

export default RightInfo;
