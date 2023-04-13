import Image from 'next/image';
import Link from 'next/link';
import DogImage from '../../public/dog-404.png';


const Custom404Page = () => {

    return (
        <div className="vh-100 w-100 position-relative bg-black text-white" id="not-found-page">
            <div className="position-absolute text-center w-100 vh-100 d-flex justify-content-center align-items-center fw-bold overflow-hidden">
                404
            </div>
            <div className="position-absolute text-center py-5 w-100 vh-100 d-flex justify-content-center align-items-center flex-column">
                <p className='fs-title-section mb-5 fw-bold'>This page doesn't exist</p>
                <Link href={'/'} className='btn btn-white'>Back Home</Link>
            </div>
            <Image src={DogImage} width={250} priority alt={'funny dog image'} className={'position-absolute bottom-0 start-50 translate-middle-x'}/>
        </div>
    )
}

export default Custom404Page;