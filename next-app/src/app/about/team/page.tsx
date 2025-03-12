"use client";

import { ReactElement } from "react";
import ProfileComponent from "@/components/ProfileComponent";
import { TrackPageViewIfEnabled } from "@/util/cookiesHandling";
import Title from "@/components/common/title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LastUpdated } from "@/components/common/last-updated";

export default function AboutTeamPage(): ReactElement {
  TrackPageViewIfEnabled();

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/about">About us</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/about/team">Team</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Title level={1} className="mb-4">
        Team
      </Title>

      <ProfileComponent
        imageUrl="/TeamPics/JanTeamPic.jpg"
        name="Jan Lorenz"
        title="Product Owner"
        bgColor="bg-muted"
      />
      <ProfileComponent
        imageUrl="/TeamPics/NatTeamPic.jpg"
        name="Natashia Benzian Olsson"
        title="Data Steward"
        bgColor="bg-neutral"
      />
      <ProfileComponent
        imageUrl="/TeamPics/SebTeamPic.png"
        name="Sebastian Lindbom Gunnari"
        title="Software Engineer"
        bgColor="bg-muted"
      />
      <ProfileComponent
        imageUrl="/TeamPics/SamTeamPic.jpg"
        name="Saman Rassam"
        title="Data Engineer"
        bgColor="bg-neutral"
      />
      <ProfileComponent
        imageUrl="/TeamPics/MarTeamPic.png"
        name="Maria Ahlsén"
        title="Coordinator"
        bgColor="bg-muted"
      />
      <LastUpdated date="11-03-2025" />
    </div>
  );
}
