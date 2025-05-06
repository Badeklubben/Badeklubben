export type Member = {
  _id: string;
  name: string;
  id: string;
  icon: string | { svg: string } | null;
  role: string;
  color: {
    label: string;
    value: string;
  };
  about: string;
  imageSrc: string;
  cv?: string;
  linkedin?: string;
  mail?: string;
};

export type Members = {
  _id: string;
  _type: "members";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  id?: string;
  role?: string;
  color?: any;
  about?: string;
  imageURL?: any;
  imageUrl?: string; // Different naming
  imageSrc?: string; // Add this to match Member
};
