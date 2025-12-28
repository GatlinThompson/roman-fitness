type MainProps = { children: React.ReactNode; centered?: boolean };

export default function Main({ children, centered }: MainProps) {
  return (
    <main
      className={`flex flex-col gap-4 p-6 rounded-lg justify-items-center min-h-screen items-center ${
        centered ? "justify-center" : ""
      } `}
    >
      {children}
    </main>
  );
}
