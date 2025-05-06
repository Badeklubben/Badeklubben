"use client";

import { createContext, useContext } from "react";
import { Member } from "@/types/member";
import { Project } from "@/types/project";

type MemberProjectContextType = {
  member: Member;
  projects: Record<string, Project>;
};

const MemberContext = createContext<MemberProjectContextType | null>(null);

export function useMemberProject() {
  const context = useContext(MemberContext);
  if (!context)
    throw new Error("useMemberProject must be used within <MemberProvider>");
  return context;
}

export function MemberProvider({
  member,
  projects,
  children,
}: {
  member: Member;
  projects: Record<string, Project>;
  children: React.ReactNode;
}) {
  return (
    <MemberContext.Provider value={{ member, projects }}>
      {children}
    </MemberContext.Provider>
  );
}
