type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="flex flex-col flex-1 pt-20 px-30 max-w-480 mx-0">
      {children}
    </div>
  );
}
