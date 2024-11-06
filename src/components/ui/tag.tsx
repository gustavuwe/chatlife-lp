export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 text-lg rounded-3xl cursor-default
      text-primary bg-primary/10 hover:bg-primary/30 duration-300"
    >
      {children}
    </div>
  );
};
