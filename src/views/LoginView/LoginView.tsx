'use client'
import { login } from "@/helpers/auth.helper";
import { validateLoginForm } from "@/helpers/validate";
import { ILoginErrors, ILoginProps } from "@/interfaces";
import React, { useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { Toast } from "@/helpers";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const LoginView = () => {
  const router = useRouter();
  const initialState = { email: "", password: "" };

  const [dataUser, setDataUser] = useState<ILoginProps>(initialState);
  const [errors, setErrors] = useState<ILoginErrors>(initialState);
  const [visible, setVisible] = useState(false);

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataUser((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const newErrors = validateLoginForm({ ...dataUser, [name]: value });
      setErrors(newErrors);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const newErrors = validateLoginForm(dataUser);
    setErrors(newErrors);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateLoginForm(dataUser);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const response = await login(dataUser);
      const { token, user } = response;
      Cookies.set('userData', JSON.stringify({ token, user }), { expires: 1 });

      Toast.fire({
        icon: "success",
        title: "Logged successfully",
      });

      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="email_address"
              className="text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              id="email_address"
              type="email"
              name="email"
              value={dataUser.email}
              placeholder="johndoe@example.com"
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {touched.email && errors.email && (
              <span className="text-sm text-red-600 mt-1">
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password:
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                id="password"
                type={visible ? "password" : "text"}
                name="password"
                value={dataUser.password}
                placeholder="********"
                onChange={handleChange}
                onBlur={handleBlur} 
                className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="p-2"
              >
                {visible ? (
                  < EyeIcon className="h-5 w-5 text-gray-600" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
            {touched.password && errors.password && (
              <span className="text-sm text-red-600">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#40ab95] text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
