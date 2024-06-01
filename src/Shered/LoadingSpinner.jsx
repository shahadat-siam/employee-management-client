import loading from '../../public/Loading.svg'
const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-96'>
            <img className='text-[#008080]' src={loading} alt="" />
        </div>
    );
};

export default LoadingSpinner;