import React, { useState } from 'react';
import { Bell, Info, Check, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: number;
  message: string;
  read_at: Date | null;
}

const MobileNotification: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "This is a notification", read_at: null },
    { id: 2, message: "This is another notification", read_at: null },
    { id: 3, message: "This is a third notification", read_at: null },
    // Add more notifications for testing scrolling
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

  return (
    <div className="md:hidden"> {/* Only show on mobile */}
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
            
            {/* <ScrollArea className="flex-grow"> */}
              {notifications.length === 0 ? (
                <p className="text-center text-gray-500 p-4">No notifications</p>
              ) : (
                notifications.map((notif) => (
                  <div key={notif.id} className={`flex items-center justify-between p-4 border-b ${notif.read_at ? 'bg-gray-50' : ''}`}>
                    <div className="flex items-center">
                      <Info className={notif.read_at ? 'text-gray-400' : 'text-blue-500'} />
                      <p className="ml-3 text-sm">{notif.message}</p>
                    </div>
                    <div className="flex items-center">
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
            {/* </ScrollArea> */}

            <div className="p-4 border-t">
              <Button onClick={markAllAsRead} className="w-full">
                Mark All as Read
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNotification;