'use client'
import { Toast } from "@/helpers";
import { register } from "@/helpers/auth.helper";
import { validateRegisterForm } from "@/helpers/validate";
import { IRegisterProps, TRegisterErrors } from "@/interfaces";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterView = () => {
  const router = useRouter();
  const initialState = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };

  const [dataUser, setDataUser] = useState<IRegisterProps>(initialState);
  const [errors, setErrors] = useState<TRegisterErrors>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setDataUser((prev) => ({ ...prev, [name]: value }));

    const newErrors = validateRegisterForm({ ...dataUser, [name]: value });
    setErrors(newErrors);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateRegisterForm(dataUser);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        try {
            await register(dataUser);
            Toast.fire({
                icon: "success",
                title: "Registered successfully",
            });
            router.push("/login"); // Redirige solo si el registro es exitoso
        } catch (error: any) {
            if (error.message === "Email already exists") {
                Toast.fire({
                    icon: "error",
                    title: "This email is already registered. Please use a different email.",
                });
            }
        }
    }
};

  return (
<div className="min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 items-center">
    <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md mt-8 mb-24">
      <h1 className="text-2xl font-bold text-center text-gray-800">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-6">

          <div className="flex flex-col">
            <label htmlFor="email_address" className="text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              id="email_address"
              type="email"
              name="email"
              value={dataUser.email}
              placeholder="johndoe@example.com"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-sm text-red-600 mt-1">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={dataUser.password}
              placeholder="********"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-sm text-red-600 mt-1">{errors.password}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={dataUser.name}
              placeholder="Your name"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="text-sm text-red-600 mt-1">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm font-medium text-gray-700">
              Address:
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={dataUser.address}
              placeholder="Your address"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && (
              <span className="text-sm text-red-600 mt-1">{errors.address}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone:
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={dataUser.phone}
              placeholder="Your phone number"
              onChange={handleChange}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
              <span className="text-sm text-red-600 mt-1">{errors.phone}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#40ab95] text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    
    
  );
};

export default RegisterView;
