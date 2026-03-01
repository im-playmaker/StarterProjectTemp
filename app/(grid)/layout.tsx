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
    <main className="text-black">
      <GridContainer className="flex flex-row" cols={3}>
        <Logo />
        <NavBar />
        <Action />
      </GridContainer>
      <GridContainer cols={1}>
        <div className="h-screen bg-white">{children}</div>
      </GridContainer>
    </main>
  );
}
