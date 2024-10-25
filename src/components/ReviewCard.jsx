import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="customer photo" className="rounded-full object-cover" width={120} height={120} />
            <p className='mt-6 max-w-sm text-center info-text dark:text-slate-100'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
                <img src={star} alt="rating icon" width={24} height={24} className='object-contain m-0' />
                <p className='text-xl font-montserrat text-slate-gray dark:text-slate-100'>({rating})</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold dark:text-slate-100'>{customerName}</h3>
        </div>
    )
}

export default ReviewCard