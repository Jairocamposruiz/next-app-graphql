interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <main
      className={`max-w-7xl mx-auto h-full min-h-container w-full py-10 px-4 items-center flex flex-col`}
    >
      {children}
    </main>
  );
}
