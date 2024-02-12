import { ReactNode, } from 'react';

export interface Menu {
  resourceName: any,
  link: string,
  submenu?: SubmenuType
}

export interface SubmenuType {
  title: string
  subTitle: string
  image: string
  items: SubmenuItemType[]
}

export interface SubmenuItemType {
  title: string
  subTitle: string
  image: string
  link: string
}

export interface FooterContactInfoItemType {
  link: string,
  icon: ReactNode,
  title: any,
}

export interface FooterContactInfoType {
  title: any
  items: FooterContactInfoItemType[]
}

export interface FooterSocialLinksitemType {
  icon: ReactNode,
  link: string
}

export interface FooterSocialLinksType {
  title: any,
  items: FooterSocialLinksitemType[]
}


export interface FooterUsefullLinksItemType {
  title: any,
  link: string
}

export interface FooterUsefullLinksType {
  title: any,
  items: FooterUsefullLinksItemType[]
}
export interface FooterType {
  socialLiks: FooterSocialLinksType,
  usefulLinks: FooterUsefullLinksType,
  contactInfo: FooterContactInfoType
}
export interface FooterLink {
  title: string,
  link: string,
  icon?: string
}

export interface Map {
  imageSrc: string,
  imageWidth: number,
  imageHeight: number,
  link: string
}

export type LayoutProps = {
  children?: ReactNode;
};

export interface DisplayDateType {
  year: string;
  month: string;
  day: string;
}

export interface DashboardSubmenuLink {
  id: number,
  title: string,
  link: string
}

export interface DashboardSubmenu {
  title: string,
  icon?: ReactNode,
  submenuList: DashboardSubmenuLink[]
}

export interface DashboardMenu {
  id: number,
  title: string,
  link: string,
  icon?: React.JSX.Element,
  submenu?: DashboardSubmenu
}

