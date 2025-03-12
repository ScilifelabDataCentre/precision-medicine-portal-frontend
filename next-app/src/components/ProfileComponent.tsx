"use client";

import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type ProfileComponentProps = {
  imageUrl: string;
  name: string;
  title: string;
  bgColor: string;
};

const ProfileComponent: React.FC<ProfileComponentProps> = ({
  imageUrl,
  name,
  title,
  bgColor,
}) => {
  return (
    <div
      className={`flex flex-row items-center p-4 transition-all duration-500 hover:bg-base-100 hover:shadow-lg ${bgColor}`}
    >
      <div className="flex items-center lg:p-2 lg:w-1/3">
        <Avatar className="w-24 lg:w-32 h-24 lg:h-32 rounded-full">
          <AvatarImage src={imageUrl} alt={name} />
        </Avatar>
        <div className="text-left lg:w-2/3 pl-4">
          <h1 className="text-2xl text-ellipsis lg:text-5xl lg:text-nowrap font-normal text-neutral-content">
            {name}
          </h1>
          <p className="text-lg lg:text-xl lg:text-nowrap italic pt-2 text-neutral-content">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
