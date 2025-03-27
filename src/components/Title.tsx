type TitleProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
};

const Title = ({ as = "h2", children, className = "" }: TitleProps) => {
  const Tag = as;

  return (
    <Tag
      className={`text-center font-bold text-[#1e3a8a] ${
        as === "h1"
          ? "text-4xl md:text-5xl"
          : as === "h2"
          ? "text-2xl md:text-3xl"
          : "text-xl md:text-2xl"
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Title;
