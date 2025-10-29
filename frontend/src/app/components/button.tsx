type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit'; 
};

const Button: React.FC<ButtonProps> = ({
    children, onClick, type = 'button' 
}) => {
    return(
        <button 
            type={type}
            onClick={onClick}
            className="w-full cursor-pointer py-4 rounded-full bg-(--dark-shade) text-(--light-shade) font-bold ">
            {children}
        </button>
    );
};

export default Button;