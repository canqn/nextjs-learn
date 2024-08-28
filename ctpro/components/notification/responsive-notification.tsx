import React, { useState } from 'react';
import { Bell, Info, Check, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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

const ResponsiveNotification: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "This is a notification", read_at: null },
    { id: 2, message: "This is another notification", read_at: null },
    { id: 3, message: "This is a third notification", read_at: null },
    { id: 4, message: "Fourth notification", read_at: null },
    { id: 5, message: "Fifth notification", read_at: null },
  ]);

  const unreadCount = notifications.filter(n => n.read_at === null).length;

  const markAsRead = (id: number): void => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read_at: new Date() } : notif
    ));
  };

  const removeNotification = (id: number): void => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const markAllAsRead = (): void => {
    setNotifications(notifications.map(notif => ({ ...notif, read_at: new Date() })));
  };

  const toggleNotifications = (): void => {
    setIsOpen(!isOpen);
  };

  const NotificationList = () => (
    <div className="grid gap-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Notifications</h3>
        <Button variant="ghost" size="sm" onClick={markAllAsRead}>
          Mark All Read
        </Button>
      </div>
      <ScrollArea className="h-[300px]">
        {notifications.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">No notifications</p>
        ) : (
          notifications.map((notif) => (
            <div key={notif.id} className={`flex justify-between items-center p-4 hover:bg-slate-100 ${notif.read_at ? 'opacity-50' : ''}`}>
              <div className="flex items-center">
                <Info className={notif.read_at ? 'text-gray-500' : 'text-blue-500'} />
                <p className='ml-2 text-sm'>{notif.message}</p>
              </div>
              <div>
                {!notif.read_at && (
                  <Button variant="ghost" size="sm" onClick={() => markAsRead(notif.id)} className="mr-2">
                    <Check className="h-4 w-4" />
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={() => removeNotification(notif.id)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </ScrollArea>
    </div>
  );

  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:block">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="relative p-2">
              <Bell className={unreadCount > 0 ? 'text-blue-500' : 'text-gray-500'} />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {unreadCount}
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 border-input rounded-lg mt-5">
            <NotificationList />
          </PopoverContent>
        </Popover>
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          size="sm" 
          className="relative p-2"
          onClick={toggleNotifications}
        >
          <Bell className={unreadCount > 0 ? 'text-blue-500' : 'text-gray-500'} />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {unreadCount}
            </span>
          )}
        </Button>

        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <Button variant="ghost" size="sm" onClick={toggleNotifications}>
                  <X />
                </Button>
              </div>
              
              <div className="flex-grow overflow-auto">
                <NotificationList />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ResponsiveNotification;