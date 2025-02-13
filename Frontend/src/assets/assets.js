import add_icon from './add_icon.svg'
import admin_logo from './lawyerConnect_logo.png'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import lawyer from './lawyer_icon.png'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import clients_icon from './clients_icon.svg'
import appointment_img from './appointment-img.png'
import header_img from './header.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_us.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import law1 from './law-1.png'
import law2 from './law-2.png'
import law3 from './law-3.png'
import law4 from './law-4.png'
import law5 from './law-5.png'
import law6 from './law-6.png'
import law7 from './law-7.png'
import law8 from './law-8.png'
import law9 from './law-9.png'
import law10 from './law-10.png'
import law11 from './law-11.png'
import law12 from './law-12.png'
import law13 from './law-13.png'
import law14 from './law-14.png'
import law15 from './law-15.png'
import Criminal_Law from './criminal-law.png'
import Family_Law from './family-law.png'
import Property_Law from './property-law.png'
import Labour_Law from './labour-law.png'
import Contract_Law from './contract-law.png'
import International_Law from './international-law.png'

export const assets = {
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
    lawyer,
    upload_area,
    home_icon,
    clients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon,
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Property Law',
        image: Property_Law
    },
    {
        speciality: 'Labour Law',
        image: Labour_Law
    },
    {
        speciality: 'Criminal Law',
        image: Criminal_Law
    },
    {
        speciality: 'International Law',
        image: International_Law
    },
    {
        speciality: 'Contract Law',
        image: Contract_Law
    },
    {
        speciality: 'Family Law',
        image: Family_Law
    },
]

export const lawyers = [
    {
        _id: 'law1',
        name: 'Advocate Richard James',
        image: law1,
        speciality: 'International Law',
        degree: 'BA LLB and JD Degree',
        experience: '9 Years',
        about: 'Advocate Richard James specializes in complex international law cases, offering a global perspective and strategic insights for resolving cross-border legal disputes. His passion for justice and extensive experience with international treaties, human rights, and global commerce make him a sought-after legal expert in the field.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law2',
        name: 'Thomas Jefferson',
        image: law2,
        speciality: 'Criminal Law',
        degree: 'BA LLB and JD Degree',
        experience: '13 Years',
        about: 'Thomas Jefferson is renowned for his relentless defense in high-profile criminal cases. With over a decade of experience in criminal law, he has built a reputation for defending the rights of the accused, delivering justice, and providing expert counsel in serious felony charges and complex legal battles.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law3',
        name: 'Advocate Thurgood Marshall',
        image: law3,
        speciality: 'Contract Law',
        degree: 'Doctor of Juridical Science',
        experience: '10 Years',
        about: 'Advocate Thurgood Marshall excels in contract law, helping businesses and individuals navigate through complex contractual agreements. With a decade of legal expertise, he ensures that his clients are protected against potential risks, offering meticulous attention to detail and strategic advice for contractual disputes and negotiations.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law4',
        name: 'Johnnie Cochran',
        image: law4,
        speciality: 'Family Law',
        degree: 'BA LLB',
        experience: '12 Years',
        about: 'Johnnie Cochran is a dedicated family law advocate with extensive experience in handling cases related to divorce, custody, and property settlements. He approaches each case with empathy, ensuring that his clients receive sound legal advice while striving for amicable solutions that protect the family\'s best interests.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law5',
        name: 'Ruth Bader Ginsburg',
        image: law5,
        speciality: 'Property Law',
        degree: 'Doctor of Juridical Science',
        experience: '14 Years',
        about: 'Ruth Bader Ginsburg brings exceptional expertise in property law, specializing in real estate transactions, disputes, and land use regulations. With a career spanning over 14 years, she offers expert legal guidance on property ownership, leasing, and complex real estate litigation.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law6',
        name: 'Advocate Andrew Williams',
        image: law6,
        speciality: 'Family Law',
        degree: 'BA LLB and JD Degree',
        experience: '14 Years',
        about: 'Advocate Andrew Williams is a seasoned family law attorney known for his compassionate approach to resolving family disputes. His expertise in divorce proceedings, child custody, and adoption cases ensures that his clients receive strong representation while maintaining focus on the well-being of the family.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law7',
        name: 'Christopher Davis',
        image: law7,
        speciality: 'Family Law',
        degree: 'Doctor of Juridical Science',
        experience: '14 Years',
        about: 'Christopher Davis is a leading family law expert with a reputation for resolving sensitive domestic matters with care and precision. With 14 years of experience, he advocates for fair resolutions in cases involving divorce, child custody, and family estate planning, always prioritizing the client’s emotional and legal needs.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law8',
        name: 'Timothy White',
        image: law8,
        speciality: 'Criminal Law',
        degree: 'Masters in Law',
        experience: '3 Years',
        about: 'Timothy White is an emerging talent in criminal law, known for his dedication and attention to detail in defending his clients. Although relatively new to the field with 3 years of experience, he has already handled significant cases with a focus on ensuring justice for those accused of serious crimes.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law9',
        name: 'Ava Mitchell',
        image: law9,
        speciality: 'Labour Law',
        degree: 'BA LLB and JD Degree',
        experience: '10 Years',
        about: 'Ava Mitchell is a dedicated labour law specialist with a decade of experience handling cases related to employment disputes, workers\' rights, and industrial relations. Her thorough understanding of labour laws and commitment to fair workplace practices makes her an invaluable resource for both employees and employers.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law10',
        name: 'Advocate Clarence Darrow',
        image: law10,
        speciality: 'Contract Law',
        degree: 'Doctor of Juridical Science',
        experience: '12 Years',
        about: 'Advocate Clarence Darrow is an experienced contract law attorney known for his proficiency in drafting and negotiating contracts. Over the course of 12 years, he has helped businesses and individuals ensure legally binding agreements that protect their interests, and he offers expert representation in contract disputes.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law11',
        name: 'Zoe Kelly',
        image: law11,
        speciality: 'International Law',
        degree: 'BA LLB and JD Degree',
        experience: '14 Years',
        about: 'Zoe Kelly is an expert in international law, with a focus on cross-border legal issues and international trade. With 14 years of experience, she has developed a keen understanding of the legal challenges that come with multinational transactions, treaties, and international relations, providing clients with reliable guidance.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law12',
        name: 'Chloe Evans',
        image: law12,
        speciality: 'Property Law',
        degree: 'Doctor of Juridical Science',
        experience: '14 Years',
        about: 'Chloe Evans is a seasoned property law expert with a 14-year track record of success in real estate litigation, property disputes, and transactions. Her attention to detail and knowledge of land use laws help clients navigate the complexities of property ownership, leasing, and development.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law13',
        name: 'David Boies',
        image: law13,
        speciality: 'Labour Law',
        degree: 'BA LLB and JD Degree',
        experience: '14 Years',
        about: 'David Boies is a highly respected labour law attorney with extensive experience in employee rights, union negotiations, and workplace policy. His expertise in ensuring compliance with labour laws and resolving employment disputes has earned him a reputation for fighting for justice in the workplace.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law14',
        name: 'Ryan Martinez',
        image: law14,
        speciality: 'Contract Law',
        degree: 'Masters in Law',
        experience: '13 Years',
        about: 'Ryan Martinez is an expert in contract law, with a specialization in drafting, reviewing, and enforcing complex agreements. His legal acumen and 13 years of experience make him a trusted advisor for businesses and individuals seeking to navigate contract negotiations and disputes with confidence.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'law15',
        name: 'John Branca',
        image: law15,
        speciality: 'Criminal Law',
        degree: 'BA LLB and JD Degree',
        experience: '11 Years',
        about: 'John Branca is a seasoned criminal lawyer dedicated to providing high-quality defense services. His sharp legal mind and client-centered approach have made him a trusted advocate for those in need of defense.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]