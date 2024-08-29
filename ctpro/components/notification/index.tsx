import React, { useEffect, useState } from "react";
import { Bell, Info, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetNotificationLatest, useGetNotificationTotal } from "@/services/user";

interface Notification {
  id: number;
  message: string;
  read_at: Date | null;
}

const Notification: React.FC = () => {
  const {notifications: notificationsLatest} = useGetNotificationLatest();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const t = useDictionary();
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "This is a notification", read_at: null },
    { id: 2, message: "This is another notification", read_at: null },
    { id: 3, message: "This is a third notification", read_at: null },
    { id: 4, message: "Fourth notification", read_at: null },
    { id: 5, message: "Fifth notification", read_at: null },
    { id: 11, message: "This is a notification", read_at: null },
    { id: 12, message: "This is another notification", read_at: null },
    { id: 13, message: "This is a third notification", read_at: null },
    { id: 14, message: "Fourth notification", read_at: null },
    { id: 15, message: "Fifth notification", read_at: null },
    { id: 21, message: "This is a notification", read_at: null },
    { id: 22, message: "This is another notification", read_at: null },
    { id: 23, message: "This is a third notification", read_at: null },
    { id: 24, message: "Fourth notification", read_at: null },
    { id: 25, message: "Fifth notification", read_at: null },
  ]);
  console.log(notificationsLatest);
  // const [texts, setTexts] = useState({
  //   signIn: "Sign in",
  //   description: "Sign in to see our deals for you, manage your trip and more",
  //   language: "Language",
  //   currency: "Currency",
  //   helperCenter: "Helper Center",
  //   contact: "Contact",
  //   privacy: "Privacy",
  //   termAndConditions: "Term & Conditions",
  //   about: "About",
  //   downloadApp: "Download App",
  //   signout: "Sign out",
  //   profile: "Profile",
  // });
  // useEffect(() => {
  //   setTexts({
  //     signIn: `${t("ad.signIn")}`,
  //     description: `${t("sideNavigation.description")}`,
  //     language: `${t("sideNavigation.language")}`,
  //     currency: `${t("sideNavigation.currency")}`,
  //     helperCenter: `${t("sideNavigation.helperCenter")}`,
  //     contact: `${t("sideNavigation.contact")}`,
  //     privacy: `${t("sideNavigation.privacy")}`,
  //     termAndConditions: `${t("sideNavigation.t&c")}`,
  //     about: `${t("sideNavigation.about")}`,
  //     downloadApp: `${t("sideNavigation.downloadApp")}`,
  //     signout: `${t("sideNavigation.signout")}`,
  //     profile: `${t("sideNavigation.profile")}`,
  //   });
  // }, [t]);

  const unreadCount = notifications.filter((n) => n.read_at === null).length;

  const markAsRead = (id: number): void => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read_at: new Date() } : notif
      )
    );
  };

  const removeNotification = (id: number): void => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const clearAllNotifications = (): void => {
    setNotifications([]);
  };

  const markAllAsRead = (): void => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, read_at: new Date() }))
    );
  };

  const toggleNotifications = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderNotifications = () => {
    return notifications.length === 0 ? (
      <p className="text-center text-gray-500 p-4">No notifications</p>
    ) : (
      notifications.map((notif) => (
        <div
          key={notif.id}
          className={`flex items-center justify-between p-4 border-b hover:bg-gray-100 ${
            notif.read_at ? "bg-gray-50" : ""
          }`}
        >
          <div className="flex items-center">
            <Info
              className={
                notif.read_at ? "text-gray-400" : "text-blue-500"
              }
            />
            <p className="ml-3 text-sm">{notif.message}</p>
          </div>
          <div className="flex items-center">
            {!notif.read_at && (
              <Button
                variant="text"
                size="sm"
                onClick={() => markAsRead(notif.id)}
                className="mr-2"
              >
                <Check className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="text"
              size="sm"
              onClick={() => removeNotification(notif.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))
    );
  };

  return (
    <>
      {isMobile ? (
        <div className="md:hidden">
          <Button
            variant="text"
            size="sm"
            className="relative p-1"
            onClick={toggleNotifications}
          >
            <Bell className="text-white" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-1 inline-flex items-center justify-center h-5 w-5 text-xs  leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {unreadCount}
              </span>
            )}
          </Button>
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-lg font-semibold">Notifications</h2>
                  <Button
                    variant="text"
                    size="sm"
                    onClick={toggleNotifications}
                  >
                    <X />
                  </Button>
                </div>
                <div className="flex-grow overflow-y-auto">
                  {renderNotifications()}
                </div>
                <div className="p-4 border-t">
                  <Button onClick={markAllAsRead} className="w-full">
                    Mark All as Read
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="text" size="sm" className="relative p-1">
              <Bell className="text-white" />
              {unreadCount > 0 && (
                <span className="absolute top-2 right-1 inline-flex items-center justify-center h-5 w-5 text-xs leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {unreadCount}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[450px] max-h-[60vh] rounded-lg mt-5 relative hidden md:block overflow-y-auto">
            <div className="grid">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Notifications</h3>
                <div className="flex gap-1">
                  <Button
                    variant="text"
                    size="sm"
                    onClick={markAllAsRead}
                    className="mr-2"
                  >
                    Mark All Read
                  </Button>
                  <Button
                    variant="text"
                    size="sm"
                    onClick={clearAllNotifications}
                  >
                    Clear All
                  </Button>
                </div>
              </div>
              {renderNotifications()}
            </div>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

export default Notification;
