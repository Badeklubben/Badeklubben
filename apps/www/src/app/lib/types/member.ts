export type Member = {
  _id: string;
  name: string;
  id: string;
  icon: string | null;
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
