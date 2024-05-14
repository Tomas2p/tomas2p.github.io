export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Images = {
  width: number;
  url: string;
  alt: string;
}

export type Identity = {
  name: string;
  nickname: string;
  favicon: string;
  logo: string;
  profile_foto: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: string;
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  about: {
    description: string;
    images: Images[];
  };
  work: {
    description: string;
    items: ResumeItem[];
  };
  connect: {
    description: string;
    links: SocialLink[];
  };
};

export type Project = {
  title: string;
  description: string;
  finish?: boolean;
  image: string;
  year: string;
  url: string;
};

export type ProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
};

export type Photo = {
  title: string;
  collection: string;
  image: string;
  year: string;
}

export type GalleryPageContent = {
  seo: SEOInfo;
  subtitle: string;
  photos: Photo[];
}