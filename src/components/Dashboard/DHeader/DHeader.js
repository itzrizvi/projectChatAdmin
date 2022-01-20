import { createPopper } from "@popperjs/core";
import cash from "cash-dom";
import $ from "jquery";
import React, { useState } from "react";
import {
  BarChart2,
  Bell,
  Edit,
  HelpCircle,
  Lock,
  LogOut,
  Mail,
  Settings,
  ToggleRight,
  User,
  UserPlus,
} from "react-feather";
import { Link } from "react-router-dom";
import logo from "../../../images/message-icon.png";
import profileImg from "../../Image/m2essageImg.jpg";
import profileImgEx from "../../Image/messageImg.jpeg";

// Notification Drop Down Starts
// Hide dropdown
function hide() {
  cash(".dropdown-menu").each(async function () {
    if (
      cash(this).attr("id") !== undefined &&
      cash('[data-dropdown-replacer="' + cash(this).attr("id") + '"]').length &&
      cash(this).data("dropdown-programmatically") === undefined
    ) {
      let randId = cash(this).attr("id");
      let dropdownToggle = cash('[data-dropdown-replacer="' + randId + '"]')
        .parent()
        .find(".dropdown-toggle");

      // Animate dropdown
      cash(this).removeClass("show");

      await setTimeout(() => {
        // Move dropdown element to body
        cash('[data-dropdown-replacer="' + randId + '"]').replaceWith(this);

        // Reset attribute
        cash(this).removeAttr("style");
        cash(this).removeAttr("data-popper-placement");

        // Set aria-expanded to false
        cash(dropdownToggle).attr("aria-expanded", false);
      }, 200);
    } else if (
      cash(this).attr("id") !== undefined &&
      !cash('[data-dropdown-replacer="' + cash(this).attr("id") + '"]')
        .length &&
      cash(this).hasClass("show") &&
      cash(this).data("dropdown-programmatically") === undefined
    ) {
      cash(this).remove();
    } else if (cash(this).data("dropdown-programmatically") === "initiate") {
      // Set programmatically attribute state
      cash(this).attr("data-dropdown-programmatically", "showed");
    } else if (cash(this).data("dropdown-programmatically") === "showed") {
      // Remove programmatically attribute state
      cash(this).removeAttr("data-dropdown-programmatically");
    }
  });
}

// Find visible dropdown toggle
function findVisibleDropdownToggle(dropdownToggle) {
  return dropdownToggle.filter((key, dropdownToggle) => {
    return dropdownToggle.offsetParent !== null;
  });
}

// Show dropdown
function show(dropdown) {
  let dropdownBox = cash(dropdown).find(".dropdown-menu").first();
  let dropdownToggle = findVisibleDropdownToggle(
    cash(dropdown).find(".dropdown-toggle")
  );
  let placement = cash(dropdown).data("placement")
    ? cash(dropdown).data("placement")
    : "bottom-end";
  let randId = "_" + Math.random().toString(36).substr(2, 9);

  // Hide dropdown
  hide();

  if (cash(dropdownBox).length) {
    // Set aria-expanded to true
    cash(dropdownToggle).attr("aria-expanded", true);

    // Set dropdown width
    // if (cash(dropdown).css("position") == "static")
    //   cash(dropdown).css("position", "relative")("");

    cash(dropdownBox).css("width", cash(dropdownBox).css("width"));

    // Move dropdown element to body
    cash('<div data-dropdown-replacer="' + randId + '"></div>').insertAfter(
      dropdownBox
    );
    cash(dropdownBox).attr("id", randId).appendTo("body");

    // Init popper
    createPopper(dropdownToggle[0], dropdownBox[0], {
      placement: placement,
    });

    // Show dropdown
    cash(dropdownBox).addClass("show");
  }
}

// Toggle dropdown programmatically
function toggleProgrammatically(dropdown) {
  let dropdownBox = cash(dropdown).find(".dropdown-menu").first();
  if (cash(dropdownBox).length) {
    showProgrammatically(dropdown);
  } else {
    hide();
  }
}

// Show dropdown programmatically
function showProgrammatically(dropdown) {
  if (cash(dropdown).find(".dropdown-menu").length) {
    cash(dropdown)
      .find(".dropdown-menu")
      .attr("data-dropdown-programmatically", "initiate");
  } else {
    let randId = cash("[data-dropdown-replacer]").data("dropdown-replacer");
    cash("#" + randId).attr("data-dropdown-programmatically", "initiate");
  }

  show(dropdown);
}

// Keyboard event
document.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    hide();
  }
});

cash.fn.dropdown = function (event) {
  if (event === "show") {
    showProgrammatically(this);
  } else if (event === "hide") {
    hide(this);
  } else if (event === "toggle") {
    toggleProgrammatically(this);
  }
};
// Notification Drop Down Ends

// Dark Mode Switcher Starts
// Set initial dark-mode
let darkMode = localStorage.getItem("darkmode");
if (darkMode === undefined) {
  localStorage.setItem("darkmode", "false");
} else {
  if (darkMode === "true") {
    $("#dark-mode-switcher").attr("checked", true);
    $("html").addClass("dark");
  } else {
    $("#dark-mode-switcher").removeAttr("checked");
    $("html").removeClass("dark");
  }
}
//  Set Localstorage first
localStorage.setItem("darkmode", "false");
const darkModeSwitch = (e) => {
  let darkMode = localStorage.getItem("darkmode");
  if (darkMode === "false") {
    localStorage.setItem("darkmode", "true");
    $("html").addClass("dark");
  } else {
    localStorage.setItem("darkmode", "false");
    $("html").removeClass("dark");
  }
};
// Dark Mode Switcher Ends

// Side Menu  Starts
const activeSideLink = (e) => {
  $(".side-menu__content__link").removeClass(
    "side-menu__content__link--active"
  );
};

// Mobile Menu Starts
const mobileMenuToggler = () => {
  if (cash(".side-menu").children().first()[0].offsetParent !== null) {
    cash("body").removeClass("main");
    cash("body").removeClass("main--backdrop");
    cash(".side-menu").addClass("hidden");
  } else {
    cash("body").addClass("main");
    cash("body").addClass("main--backdrop");
    cash(".side-menu").removeClass("hidden");
  }
};

//  Logout Function
const handleLogout = (e) => {
  e.preventDefault();
  localStorage.removeItem("token");
  window.location.reload();
};

const DHeader = () => {
  // Profile  Click Count
  const [profileCount, setProfileCount] = useState(0);
  // Notofication Click Count
  const [notificationClickCount, setnotificationClickCount] = useState(0);

  //  Profile  Menu Toggler
  const profileToggler = (e) => {
    document.getElementById("profiledrop").style.opacity = 1;
    document.getElementById("profiledrop").style.visibility = "visible";
    document.getElementById("profiledrop").style.top = "-23px";
    setProfileCount(profileCount + 1);
  };
  if (profileCount > 1) {
    document.getElementById("profiledrop").style.opacity = 0;
    document.getElementById("profiledrop").style.visibility = "hidden";
    document.getElementById("profiledrop").style.top = "-3px";
    setProfileCount(0);
  }
  //  Notification Toggler
  const notificationToggler = (e) => {
    document.getElementById("notificationToggle").style.opacity = 1;
    document.getElementById("notificationToggle").style.visibility = "visible";
    document.getElementById("notificationToggle").style.top = "-23px";
    setnotificationClickCount(notificationClickCount + 1);
  };
  if (notificationClickCount > 1) {
    document.getElementById("notificationToggle").style.opacity = 0;
    document.getElementById("notificationToggle").style.visibility = "hidden";
    document.getElementById("notificationToggle").style.top = "-3px";
    setnotificationClickCount(0);
  }

  return (
    <>
      {/* <!-- BEGIN: Top Bar --> */}
      <div className="top-bar top-0 left-0 fixed w-full h-16">
        <div className="-intro-y top-bar__content bg-white border-theme-3 dark:bg-dark-2 dark:border-dark-2 border-b w-full h-full flex px-5">
          {/* <!-- BEGIN: Logo --> */}
          <Link
            className="hidden md:flex items-center h-full mr-auto"
            to="/dashboard"
          >
            <img
              alt="Topson Messenger Tailwind HTML Admin Template"
              className="h-8"
              src={logo}
            />
            <div className="text-base font-light ml-4">
              {" "}
              <span className="font-medium">IT-Corner</span> Messenger{" "}
            </div>
          </Link>
          {/* <!-- END: Logo --> */}
          <span
            onClick={mobileMenuToggler}
            className="mobile-menu-toggler flex md:hidden items-center h-full mr-auto px-5 -ml-5"
          >
            {" "}
            <BarChart2
              className="w-5 h-5 transform rotate-90"
              strokeWidth="1"
            />{" "}
          </span>
          <div className="h-full flex items-center mr-3">
            <div className="mr-3">Dark Mode</div>
            <input
              onChange={darkModeSwitch}
              className="form-check-switch"
              type="checkbox"
              id="dark-mode-switcher"
            />
          </div>
          {/* <!-- BEGIN: Notifications --> */}
          <div className="notification-dropdown dropdown">
            <span
              onClick={notificationToggler}
              className="notification-dropdown__toggler text-gray-600 border-theme-7 dark:border-dark-4 dark:text-gray-300 dropdown-toggle h-full flex items-center px-5 relative -mr-3 md:mr-0 md:border-l md:border-r"
            >
              <div className="relative">
                <Bell className="w-5 h-5" strokeWidth="1" />
                <div className="w-2 h-2 bg-theme-1 text-white flex items-center justify-center absolute -mt-0.5 top-0 right-0 rounded-full"></div>
              </div>
            </span>
            <div
              className="notification-dropdown__content dropdown-menu"
              id="notificationToggle"
            >
              <div className="dropdown-menu__content box dark:bg-dark-2 px-4 pt-4 pb-5">
                <div className="text-left font-medium leading-tight mb-4">
                  Notifications
                </div>

                <div className="cursor-pointer relative flex items-center notification-zoom-in">
                  <div className="w-10 h-10 flex-none image-fit mr-1">
                    <img
                      alt="Topson Messenger Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={profileImgEx}
                    />
                    <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <Link
                        to="/dashboard"
                        className="font-medium truncate mr-5"
                      >
                        Keanu Reeves
                      </Link>
                      <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">
                        05:09 AM
                      </div>
                    </div>
                    <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomi
                    </div>
                  </div>
                </div>

                <div className="cursor-pointer relative flex items-center mt-2 notification-zoom-in">
                  <div className="w-10 h-10 flex-none image-fit mr-1">
                    <img
                      alt="Topson Messenger Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={profileImgEx}
                    />
                    <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <Link
                        to="/dashboard"
                        className="font-medium truncate mr-5"
                      >
                        Leonardo DiCaprio
                      </Link>
                      <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">
                        01:10 PM
                      </div>
                    </div>
                    <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem{" "}
                    </div>
                  </div>
                </div>

                <div className="cursor-pointer relative flex items-center mt-2 notification-zoom-in">
                  <div className="w-10 h-10 flex-none image-fit mr-1">
                    <img
                      alt="Topson Messenger Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={profileImgEx}
                    />
                    <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <Link
                        to="/dashboard"
                        className="font-medium truncate mr-5"
                      >
                        Christian Bale
                      </Link>
                      <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">
                        05:09 AM
                      </div>
                    </div>
                    <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem{" "}
                    </div>
                  </div>
                </div>

                <div className="cursor-pointer relative flex items-center mt-2 notification-zoom-in">
                  <div className="w-10 h-10 flex-none image-fit mr-1">
                    <img
                      alt="Topson Messenger Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={profileImgEx}
                    />
                    <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <Link
                        to="/dashboard"
                        className="font-medium truncate mr-5"
                      >
                        Kevin Spacey
                      </Link>
                      <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">
                        06:05 AM
                      </div>
                    </div>
                    <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomi
                    </div>
                  </div>
                </div>

                <div className="cursor-pointer relative flex items-center mt-2 notification-zoom-in">
                  <div className="w-10 h-10 flex-none image-fit mr-1">
                    <img
                      alt="Topson Messenger Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={profileImgEx}
                    />
                    <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <Link
                        to="/dashboard"
                        className="font-medium truncate mr-5"
                      >
                        Tom Hanks
                      </Link>
                      <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">
                        05:09 AM
                      </div>
                    </div>
                    <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END: Notifications --> */}
          {/* <!-- BEGIN: Account --> */}
          <div
            className="account-dropdown dropdown relative"
            id="profileOptoggler"
            onClick={profileToggler}
          >
            <div className="h-full dropdown-toggle flex items-center pl-5 front-end-profile">
              <div className="w-8 h-8 image-fit">
                <img
                  alt="Topson Messenger Tailwind HTML Admin Template"
                  className="rounded-full shadow-md"
                  src={profileImg}
                />
              </div>
              <div className="hidden md:block ml-3">
                <div className="w-28 truncate font-medium leading-tight">
                  Keanu Reeves
                </div>
                <div className="account-dropdown__info text-xs text-gray-600">
                  Frontend Engineer
                </div>
              </div>
            </div>
            <div
              className="dropdown-content dropdown-menu absolute w-56 z-20"
              id="profiledrop"
            >
              <div className="dropdown-menu__content box dark:bg-dark-2">
                <div className="p-2">
                  <Link
                    to=""
                    className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                  >
                    {" "}
                    <User
                      className="w-4 h-4 mr-2"
                      strokeWidth="1"
                    /> Profile{" "}
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                  >
                    {" "}
                    <Edit className="w-4 h-4 mr-2" strokeWidth="1" /> Add
                    Account{" "}
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                  >
                    {" "}
                    <Lock className="w-4 h-4 mr-2" strokeWidth="1" /> Reset
                    Password{" "}
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                  >
                    {" "}
                    <HelpCircle
                      className="w-4 h-4 mr-2"
                      strokeWidth="1"
                    /> Help{" "}
                  </Link>
                </div>
                <div className="border-gray-200 dark:border-dark-4 p-2 border-t">
                  <Link
                    id="logOut"
                    onClick={handleLogout}
                    to="#"
                    className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                  >
                    <ToggleRight className="w-4 h-4 mr-2" strokeWidth="1" />
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END: Account --> */}
        </div>
      </div>
      {/* <!-- END: Top Bar --> */}
      {/* <!-- BEGIN: Side Menu --> */}
      <div className="side-menu hidden md:block top-0 left-0 fixed w-16 h-screen">
        <div className="side-menu__content box border-theme-3 dark:bg-dark-2 dark:border-dark-2 -intro-x border-r w-full h-full pt-16 flex flex-col justify-center overflow-hidden">
          <Link
            onClick={activeSideLink}
            to="/dashboard/recentchats"
            className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 side-menu__content__link--active relative tooltip py-5"
            data-placement="right"
            title="Chats"
            data-content="chats"
          >
            {" "}
            <Mail className="w-5 h-5 mx-auto" strokeWidth="1" />{" "}
          </Link>
          <Link
            onClick={activeSideLink}
            to="/dashboard/sideprofile"
            className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5"
            data-placement="right"
            title="Profile"
            data-content="profile"
          >
            {" "}
            <User className="w-5 h-5 mx-auto" strokeWidth="1" />{" "}
          </Link>
          <Link
            className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5"
            to="/dashboard/login"
            data-placement="right"
            title="Login"
          >
            {" "}
            <Lock className="w-5 h-5 mx-auto" strokeWidth="1" />{" "}
          </Link>
          <Link
            className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5"
            to="/dashboard/registration"
            data-placement="right"
            title="Register"
          >
            {" "}
            <UserPlus className="w-5 h-5 mx-auto" strokeWidth="1" />{" "}
          </Link>
          <Link
            className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5"
            to="/dashboard"
            data-placement="right"
            title="Settings"
          >
            {" "}
            <Settings className="w-5 h-5 mx-auto" strokeWidth="1" />{" "}
          </Link>
          <Link
            onClick={handleLogout}
            className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5"
            to="#"
            data-placement="right"
            title="Logout"
          >
            {" "}
            <LogOut className="w-5 h-5 mx-auto" strokeWidth="1" />{" "}
          </Link>
        </div>
      </div>
      {/* <!-- END: Side Menu --> */}
    </>
  );
};

export default DHeader;
