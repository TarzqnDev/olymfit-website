import React from "react";

type InputFieldProps = {
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
    type = 'text', placeholder, value, onChange,
}) => {
    return(
        <div className="mb-4">
            <input 
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-4 border border-(--light-gray-shade) rounded-sm text-(--dark-shade)"
            />
        </div>
    );
};

export default InputField;