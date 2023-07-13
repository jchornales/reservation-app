export const metadata = {
  title: 'Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <main className="w-screen h-screen">{children}</main>;
}
