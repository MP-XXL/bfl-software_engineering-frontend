// import { useState } from 'react';

// function ContactForm() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
//       <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
//       <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" />
//       <button type="submit">Send</button>
//     </form>
//   );
// }


import { FC, ReactNode } from 'react';

// Define the props interface
interface HeaderProps {
  title: string;
  subtitle?: string;        // Optional prop
  isActive: boolean;        // Required boolean
  onClick: () => void;      // Callback function
  children?: ReactNode;     // Accept JSX children
}

// Functional component with typed props
const Header: FC<HeaderProps> = ({
  title,
  subtitle,
  isActive,
  onClick,
  children
}) => {
  return (
    <header onClick={onClick}>
      <h1 className={isActive ? 'active' : ''}>
        {title}
      </h1>
      {subtitle && <p>{subtitle}</p>}
      {children}
    </header>
  );
};