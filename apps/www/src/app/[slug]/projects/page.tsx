"use client";
import Link from "next/link";
import { RiLockPasswordFill } from "react-icons/ri";
import { useMemberProject } from "@/context/MemberContext";
import Image from "next/image";

export default function ProjectsPage() {
  const { member, projects } = useMemberProject();

  return (
    <div className="flex flex-wrap justify-center items-center gap-12 p-12">
      {projects &&
        Object.entries(projects).map(([id, project]) => {
          if (!project.link) return null;

          return (
            <div
              key={member.id + project.name + id}
              className="w-[370px] rounded-3xl shadow-md overflow-hidden flex flex-col"
              style={{
                backgroundColor: project.color || "var(--bk-color-red)",
              }}
            >
              <Link href={project.link}>
                <div className="flex justify-center items-center w-full h-1/2 py-8">
                  {project.icon ? (
                    <Image
                      className="opacity-40 w-1/2 h-1/2"
                      src={`data:image/svg+xml,${encodeURIComponent(project.icon)}`}
                      alt={`${project.name} icon`}
                      width={100}
                      height={100}
                      unoptimized={true}
                    />
                  ) : (
                    <RiLockPasswordFill className="opacity-40 w-1/2 h-1/2" />
                  )}
                </div>
                <div className="bg-white p-5">
                  <div className="font-bold text-lg mb-1">
                    {project.name || project.link}
                  </div>
                  <div className="text-sm text-gray-600">
                    {project.description || ""}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
