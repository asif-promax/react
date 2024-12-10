import React, { useState } from 'react';

const FormHandle = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Name:
              <input type="text" className='border-gray-400 hover:bg-opacity-0 hover:shadow-sm bg-slate-100' name="name" value={form.name} onChange={handleChange}/>
            </label>
          </li>
          <li>
            <label>Email:
              <input type="email" className='border-gray-400 hover:shadow-sm hover:bg-opacity-0 bg-slate-100' name="email" value={form.email} onChange={handleChange}/>
            </label>
          </li>
          <li>
            <label>Password:
              <input type="password" className=' hover:shadow-sm border-gray-400 hover:bg-opacity-0 bg-slate-100' name="password" value={form.password} onChange={handleChange}/>
            </label>
          </li>
        </ul>
        <button type="submit" className="border-2 hover:bg-slate-500 rounded-md px-8 py-2">Submit</button>
      </form>
    </div>
  );
};

export default FormHandle;
