import { ReactNode } from 'react';
export interface ImageType {
    src: string
    width: number
    height: number
}

export type ServerPageProps = {
    params?: any;
    searchParams?: any;
};

export interface GeneralImageType {
    src: string,
    width: number,
    height: number
}
export interface GeneralDetailImageType {
    src: string,
    width: number,
    height: number
}
export interface GeneralHeaderType {
    title: any,
    description?: any[],
    image: GeneralImageType,
}

export interface CardType {
    id: string,
    title?: any,
    description?: any,
    image: GeneralImageType,
    link?: string,
    template?: number
}

export interface ArticleCardType {
    id: string,
    title?: any,
    description?: any,
    image: GeneralImageType[],
    link?: string,
    template?: number
}

export interface DetaitlType {
    id: string,
    title?: any,
    description?: any,
    image: GeneralDetailImageType[],
    template?: number
}

export interface DetaitlExType {
    id: string,
    title?: any,
    description?: any,
    image: GeneralDetailImageType[],
    template?: number
}

export interface ContactUsDetaitlType {
    title?: any,
    description?: any,
    data: ContactUsDataDetailType[],
}

export interface ContactUsDataDetailType{
    id: string,
    title: string,
    description: string,
    image: ReactNode
}

export interface SpecialDetaitlType {
    id: string,
    secondtitle: string,
    thirdtitle: string,
    title?: any,
    videotitle: string,
    category: string,
    description: string,
    descriptiontop?: string[],
    image: GeneralDetailImageType[],
    coverLink: GeneralDetailImageType,
    template?: number
}

export interface ServicePageType {
    header: GeneralHeaderType
    item: CardType[]
}

export interface ArticlePageType {
    header: GeneralHeaderType
    item: ArticleCardType[]
}

export interface CardClassesType {
    root?: string
    image?: string
    back?: string,
    title?: string,
}

export interface ServiceDetailType {
    header: GeneralHeaderType
    item: DetaitlType[]
}
export interface SpecialMachineDetailType {
    header: GeneralHeaderType
    item: SpecialDetaitlType[]
}
export interface ExDetailType {
    header: GeneralHeaderType
    item: DetaitlExType[],
}

export interface CncViseData {
    id: string,
    title?: any,
    description?: any,
    image?: ReactNode
}

export interface CncViseItem {
    id: string,
    headtitle: string,
    template: string
    data: CncViseData[],
    image: GeneralImageType,
}

export interface CncVisePageType {
    header: GeneralHeaderType
    cncviseproperty: CncViseItem[],
    cncviseaccessories: CncViseItem[],
    cncvisebenefit: CncViseItem[]
}

export interface AboutUsHeaderType {
    title: string,
    headtitle: string,
    description?: string[],
    image: GeneralImageType,
}

export interface ContactUsHeaderType {
    title: string,
    description?: string[],
    image: GeneralImageType,
}

export interface AboutUsOurTeam {
    id?: string,
    title?: string,
    description?: string,
    image: GeneralImageType,
}

export interface AboutUsExperienceType {
    id?: string,
    headtitletop?: string,
    headtitlebottom?: string,
    title?: string,
    item?: string[],
    descriptiontop?: string,
    descriptionbottom?: string,
    imagetop?: GeneralImageType,
    imagebottom?: GeneralImageType,
}
export interface AboutUsOurTeamType {
    id?: string,
    title?: string,
    description?: string,
    image: GeneralImageType,
}
export interface AboutUsServiceType {
    id?: string,
    title?: string,
    description: string,
    items?: AboutUsItem[]
}

export interface AboutUsItem {
    id?: string,
    title?: string,
    description?: string,
    image: GeneralImageType,
    link: string
}

export interface AboutUsPageType {
    header: AboutUsHeaderType
    aboutusexperience: AboutUsExperienceType,
    aboutusourteam: AboutUsOurTeamType,
    aboutusourservice: AboutUsServiceType
}

export interface ContactUsPageType {
    header: ContactUsHeaderType
    item: ContactUsDetaitlType,
}