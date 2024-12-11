import { useEffect, useState } from "react";
import SignupModal from "../components/modals/signupmodal";
import { Button, Card, FormControl, Spinner } from "react-bootstrap";
import TopBarUnAuth from "../components/bars/topbar";
import team from '../assets/svgs/team.svg';
import './index.css'
import SideBarUnAuth from "../components/bars/sidebar";
import LoginModal from "../components/modals/loginmodal";
import { useNavigate } from "react-router-dom";
import { IService, IServices } from "../interfaces/service";
import { toast } from "react-toastify";
import playstore from '../assets/pngs/playstore.png';
import appstore from '../assets/pngs/appstore.png';
import { getServices } from "../app/controllers/service";
import api from "../app/controllers/api";
import { staticServices } from "../constants";
import CategoryCard from "../components/cards/categoryCard";
import TextListCard from "../components/cards/text-list-card";
import ImageCard from "../components/cards/image-card";
import Footer from "../components/bars/footer";
import CustomInput from "../components/inputs";
import { IGig } from "../interfaces/gig";
import SellerCard from "../components/cards/seller-card";

const HomePage = () => {
    const navigate = useNavigate()
    const token: string = localStorage.getItem('userToken') || ''
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [limit, setLimit] = useState<number>(15);
    const [services, setServices] = useState<IService[]>([]);
    const [gigs, setGigs] = useState<IGig[]>([]);


    const [onSideNav, setOnSideNav] = useState(false);

    const [allServices, setAllServices] = useState<IService[]>([]);
    const [currentServicesPage, setCurrentServicesPage] = useState(1);
    const [allServicePageNumber, setAllServicePageNumber] = useState(1);
    const [refData, setRefData] = useState(false);
    const [transit, setTransit] = useState(false);
    const [loading, setLoading] = useState(true)

    const LoadingPage = () => {

        useEffect(() => {
            token && navigate('/dashboard', { replace: true, preventScrollReset: true })
        }, [token])

        return (
            <div>loading</div>
        )
    }

    const handleGetServices = async () => {
        try {
            setLoading(true)
            const res = await api.get(`service/all-services?limit=${limit}&page=${pageNumber}`);
            if (res.data) {
                setServices(res?.data?.payload);
                setLoading(false);
                console.log(res?.data?.payload)
            }
        } catch (error) {

        }
    }

    const handleGetGigs = async () => {
        try {
            const res = await api.get(`gig/get-gigs?limit=${limit}&page=${pageNumber}`);
            if (res.data) {
                setGigs(res?.data?.payload);
                console.log(res?.data?.payload)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        handleGetServices();
        handleGetGigs()
    }, [refData])


    const ourValues = [
        {
            title: 'Well veted proffesionals',
            icon: 'bi bi-award-fill',
            description:
                'Get access to a pool of skilled industry professionals from all over Nigeria. for every task, at any price point.'
        },
        {
            title: 'Pay per project delivery',
            icon: 'bi bi-currency-exchange',
            description:
                'No monthly salary, just project-based pricing. Payments only get released when you approve.'
        },
        {
            title: 'No delay in delivery',
            icon: 'bi bi-stopwatch-fill',
            description:
                'Filter to find the right professionals quickly and get great work delivered in no time, every time.'
        },
        {
            title: '24/7 Customer support',
            icon: 'bi bi-headset',
            description:
                'Chat with our team to get your questions answered or resolve any issues with your orders.'
        }

    ]



    const handleNextService = () => {
        setTransit(!transit)
        if (currentServicesPage == allServicePageNumber) {
            setCurrentServicesPage(1);
            setRefData(!refData)
        } else {
            setCurrentServicesPage(currentServicesPage + 1);
            setRefData(!refData)
        }

    }
    const handlePrevService = () => {
        setTransit(!transit)
        if (currentServicesPage == 1) {
            setCurrentServicesPage(1)
            setRefData(!refData)
        } else {
            setCurrentServicesPage(curr => curr - 1)
            setRefData(!refData)
        }

    }



    return (
        <div className="container-fluid p-0 m-0 w-100" style={{ zIndex: 5 }}>
            <>
                <div className="w-100 section-one bg-primary text-light px-4">

                    <div className="left d-flex flex-column mt-4 gap-2">
                        <h5 className="fw-bolder fs-1">
                            Empowering Nigerians with
                            Remote Work Opportunity
                            and Connection.
                        </h5>
                        <p>
                            Work9ja connects Nigerian professionals
                            with remote
                            work opportunities, providing a seamless platform
                            for job seekers and  employers to   collaborate
                            and thrive in a flexible work environment.
                        </p>
                        <div className="d-flex gap-2">
                            <img role="button" src={playstore} height={50} />
                            <img role="button" src={appstore} height={50} />

                        </div>
                        <div className="mt-3">
                            <CustomInput type='search' searchData={gigs} />
                        </div>


                    </div>
                    <div className="right d-flex mt-4 justify-content-center">
                        <img className="" src={team} />
                    </div>

                </div>

                {
                    services.length > 0 &&
                    <div className="w-100 px-3 mt-3">
                        <h5>Available Services</h5>
                        {
                            loading &&
                            <div className="w-100 text-center">
                                <Spinner className="text-primary" />
                            </div>
                        }
                        <div className="w-100 d-flex flex-row flex-wrap">
                            {
                                !loading && services.map((services: any) => <CategoryCard icon={services.webIcon} primaryColor={services.colorCode} categoryTitle={services.nameOfService} />)
                            }
                        </div>
                    </div>
                }

                <div className="w-100 px-3 mt-5">
                    <h5>What we bring to your table.</h5>
                    <div className="w-100 d-flex rounded flex-row flex-wrap p-3"
                        style={{ backgroundColor: '#EEF3F3', minHeight: '15em' }}>
                        {
                            ourValues.map((values, index: number) =>
                                (<TextListCard title={values.title} icon={values.icon} description={values.description} />)
                            )
                        }
                    </div>
                </div>

                {
                    services.length > 0 &&
                    <div className="w-100 px-3 mt-5">
                        <h5>Sellers in your area</h5>
                        {
                            loading &&
                            <div className="w-100 text-center">
                                <Spinner className="text-primary" />
                            </div>
                        }
                        <div className="w-100  mt-4 d-flex flex-row flex-wrap gap-2">
                            {
                                !loading && gigs.map((gig: IGig) => <SellerCard gigPrice={gig.sellerPrice} gigImage={gig.gigImages[0]} sellerImage={gig.sellerInfo.creatorFullName} gigTitle={gig.gigTitle} />)
                            }
                        </div>
                    </div>
                }

                <div className="w-100 mt-5 text-center">
                    <h3>
                        We're helping businesses like yours scale faster.
                    </h3>
                    <div className="d-flex flex-wrap p-3 justify-content-center align-items-center">
                        <ImageCard imageUrl={'https://wok9jamedia.s3.eu-north-1.amazonaws.com/Medium+shot+woman+carrying+food+on+head.png'} />
                        <div className="p-3 shadow-sm rounded text-start">
                            <p className="fw-bold" style={{ fontSize: '1.2em' }}>Steps to become a successful seller.</p>
                            <ul className="text-start">
                                <li>Make sure you have a catchy title for key word optimisation.</li>
                                <li>Use attractive product/service image to capture buyer's attention.</li>
                                <li>Buy one of the premium promotion offers to help place your add on first page.</li>
                                <li>Have quality buy's/sellers review, their testimony goes a long way.</li>
                                <li>Deliver and respond to messages on time.</li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center w-100 mt-5 section-6">
                    <Card className="shadow-sm border-0"
                        style={{ minWidth: '20em', minHeight: '17em', backgroundColor: '#8D493A' }}>
                        <Card.Body className="d-flex text-light flex-column align-items-center justify-content-center">
                            <i className="" style={{ fontSize: '2em' }}></i>
                            <h3 className="niramit-semibold text-center"
                                style={{ textWrap: 'wrap', wordWrap: 'break-word' }}>
                                Quality products and services from proffesional sellers.
                            </h3>
                            <Button
                                // onClick={() => setRegModal(true)}
                                className="bg-primary rounded border-0 rounded-4 text-light"
                                style={{ minWidth: '10em', minHeight: '3.5em', maxWidth: '10em' }}
                            >Join us</Button>
                        </Card.Body>
                    </Card>

                </div>
                <Footer />


            </>
        </div>
    )
}
export default HomePage;