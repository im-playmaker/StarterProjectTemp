import GridContainer from "@/components/defaults/GridContainer";
import Action from "@/components/ui/Navbar/Action";
import Logo from "@/components/ui/Navbar/Logo";

import NavBar from "@/components/ui/Navbar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="text-black grid ">
      <GridContainer className="p-2" cols={12}>
        <Logo />
        <NavBar />
        <Action />
      </GridContainer>
      <GridContainer cols={12}>
        <div className=" col-span-12 h-screen">{children}</div>
      </GridContainer>
    </main>
  );
}
