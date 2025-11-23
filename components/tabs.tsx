'use client';

import { mergeTailwindClassNames as cn } from '@/utils/tailwind';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
}

interface TabsProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function Tabs({ value, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(value);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('flex flex-col gap-12', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      className={cn(
        'bg-background-neutral-faded inline-flex w-full items-center rounded-full p-2',
        className,
      )}
    >
      {children}
    </div>
  );
}
Tabs.List = TabsList;

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={cn(
        'w-full cursor-pointer rounded-full px-6 py-3 font-medium transition-all duration-200',
        isActive
          ? 'bg-background-neutral-default text-foreground-neutral-default'
          : 'text-foreground-neutral-subtle hover:text-foreground-neutral-default',
        className,
      )}
    >
      {children}
    </button>
  );
}
Tabs.Trigger = TabsTrigger;

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function TabsContent({ value, children, className }: TabsContentProps) {
  const { activeTab } = useTabs();

  if (activeTab !== value) {
    return null;
  }

  return <div className={cn('flex flex-col gap-8', className)}>{children}</div>;
}
Tabs.Content = TabsContent;
