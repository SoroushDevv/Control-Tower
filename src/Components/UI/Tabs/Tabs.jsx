import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg dark:bg-dark-bg-surface p-1 ",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-md border-b-2 hover:border-light-border-Brand  data-[state=active]:bg-transparent data-[state=active]:border-b data-[state=active]:border-b-light-border-Brand",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 p-4 border rounded-md dark:text-light-bg-base",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };

export function TabsContainer({ tabs, defaultValue }) {


  return (
    <Tabs defaultValue={defaultValue || (tabs[0] && tabs[0].value)} className="w-full dark:bg-dark-bg-surface">
      <TabsList className="grid grid-cols-3 dark:border-dark-border-light gap-5">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
<div className="h-fit max-h-screen overflow-hidden overflow-y-auto scrollbar-hide" >
   {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <tab.Component />
        </TabsContent>
      ))}
</div>
     
    </Tabs>
  );
}

export default TabsContainer;
