import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        borderRadius: '12px',
        width: '90%',
        maxWidth: '500px',
        backgroundColor: '#fff',
        overflow: 'auto',
        maxHeight: '90vh',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
    },
};

Modal.setAppElement('#root');

const SingleCompanyJobs = ({ singleCompanyJob, website }) => {
    const { title, bannerImage, location, salary, jobType, description, requirements } = singleCompanyJob;

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="bg-secondary p-2 rounded-lg flex flex-col h-full">

            <img className="w-full h-[200px]" src={bannerImage} alt="Banner" />

            <div className="flex flex-col flex-grow px-5 py-3 space-y-2">
                <h1 className="text-accent font-semibold text-xl">{title}</h1>
                <p className="text-accent-content text-sm">{description}</p>
                <p className="text-sm text-accent-content">
                    Job Type : <span className="text-green-700">{jobType}</span>
                </p>


                <div className="flex justify-between mt-auto">
                    <button onClick={openModal} className="btn btn-primary px-2 text-xs py-0">More details</button>
                    <Link to={website} className="btn btn-primary px-2 text-xs">Apply Now</Link>


                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div className=" p-5 text-accent-content bg-gray-200">
                            <div className="text-center mb-5">
                                <h2 className='text-accent text-2xl font-semibold mb-2'>{title}</h2>
                                <p className="">{description}</p>
                            </div>
                            <div className="space-y-3">
                                <p className=""> <span className='text-accent font-semibold'> Location : </span> {location}</p>
                                <p className=""> <span className='text-accent font-semibold'> Job type : </span> {jobType}</p>
                                <p className=""> <span className='text-accent font-semibold'> Salary : </span> {salary}</p>
                                <p className=""> <span className='text-accent font-semibold'> Requirements : </span> {requirements}</p>
                            </div>
                            <button onClick={closeModal} className='block mt-8 bg-primary py-2 text-base-100 text-center w-full'>Close Details</button>
                        </div>

                    </Modal>
                </div>
            </div>
        </div>

    );
};

export default SingleCompanyJobs;