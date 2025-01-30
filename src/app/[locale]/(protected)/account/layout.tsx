import SideNavigation from "@/src/components/account/SideNavigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 990px:grid-cols-[16rem_1fr] 990px:h-full 990px:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
