import AboutUs from '@/modules/general/components/about-us';
import GeneralLayout from "@/modules/layout/components/general-layout";
import GeneralHeader from '@/modules/general/components/general-header/GeneralHeader';
import AboutUsData from '@/modules/general/components/about-us/abou-us-data/AboutUsData';

export default function AboutUsPage() {
    return (
        <GeneralLayout>
            <GeneralHeader data={AboutUsData.header} />
            <AboutUs
                experience={AboutUsData.aboutusexperience}
                ourteam={AboutUsData.aboutusourteam}
                ourservice={AboutUsData.aboutusourservice}
            />
        </GeneralLayout>
    )
}


