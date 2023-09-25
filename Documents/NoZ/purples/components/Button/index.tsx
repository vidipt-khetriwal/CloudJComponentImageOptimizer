/*
 This code is responsible for creating a button component.
    It takes three props: 
        - children
        - type
        - className
        - onClick
    Children is the text that will be displayed inside the button.
    Type is the type of button that will be created.
    ClassName is any additional classes that will be applied to the button.
    onClick is a function that will be called when the button is clicked.
*/

type ButtonProps = {
  children: React.ReactNode;
  type: "primary" | "secondary" | "neutral";
  className?: string;
  onClick?: () => void;
};

const getStyle = (type, className) => {
  const styles = {
    primary: `inline-flex h-12 w-52 items-center justify-center gap-2.5 rounded-3xl bg-primaryGreen px-6 py-3 ${className}`,
    secondary: `inline-flex h-12 w-52 items-center justify-center gap-2.5 rounded-3xl bg-emerald-400 px-6 py-3 hover:bg-emerald-50 ${className}`,
    neutral: `mb-6 h-12 w-44 justify-around rounded-3xl bg-amber-50 bg-opacity-10 px-6 py-3 ${className}`,
  };
  return styles[type] || styles.primary;
};

const Button = ({ children, type, className, onClick }: ButtonProps) => {
  const style = getStyle(type, className);

  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
};

export default Button;
