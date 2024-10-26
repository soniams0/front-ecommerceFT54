import { IUserSession } from '@/interfaces';
import { cookies } from 'next/headers';
import React from 'react';

const ProfileView = () => {
  const cookieStore = cookies();
  const userData: IUserSession = JSON.parse(cookieStore.get('userData')?.value ?? '{}');

  return (
    <div className="max-w-sm mx-auto mt-12 mb-20 bg-customColor shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900">User Profile</h1>
        <p className="text-gray-600 mb-6"></p>

        <div className="border-t border-gray-200">
          <dl>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.user.name}</dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.user.email}</dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Phone number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.user.phone}</dd>
            </div>

            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData.user.address}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
