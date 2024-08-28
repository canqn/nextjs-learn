import React, { useState } from "react";
import { Bell, Info, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Notification {
  id: number;
  message: string;
  read_at: Date | null;
}

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "This is a notification", read_at: null },
    { id: 2, message: "This is another notification", read_at: null },
    { id: 3, message: "This is a third notification", read_at: null },
    { id: 4, message: "Fourth notification", read_at: null },
    { id: 5, message: "Fifth notification", read_at: null },
  ]);

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

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer text-center px-1 py-2 relative">
            <div className="absolute top-0 right-0">
              {unreadCount > 0 && (
                <span className="text-xs bg-red-500 text-white rounded-full px-1 py-0">
                  {unreadCount}
                </span>
              )}
            </div>
            <Bell />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[450px] border-input rounded-lg mt-4 relative hidden md:block">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
          </div>
          <div className="grid">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Notifications</h3>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className="mr-2"
                >
                  Mark All Read
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllNotifications}
                >
                  Clear All
                </Button>
              </div>
            </div>
            {notifications.length === 0 ? (
              <p className="text-sm text-gray-500 text-center">
                No notifications
              </p>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`flex justify-between items-center hover:bg-slate-100 p-4 rounded-md ${
                    notif.read_at ? "opacity-50" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <Info
                      className={
                        notif.read_at ? "text-gray-500" : "text-blue-500"
                      }
                    />
                    <p className="ml-2 text-sm">{notif.message}</p>
                  </div>
                  <div>
                    {!notif.read_at && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => markAsRead(notif.id)}
                        className="mr-2"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeNotification(notif.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Notification;
