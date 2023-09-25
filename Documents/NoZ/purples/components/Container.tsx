type ContainerProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

const Container = ({ id, children, className }: ContainerProps) => {
  return (
    <section className={`relative ${className}`} id={id}>
      <div className="mx-1 my-1 sm:mx-5 sm:my-4 md:mx-10">{children}</div>
    </section>
  );
};

export default Container;
