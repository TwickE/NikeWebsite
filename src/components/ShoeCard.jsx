const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div>
                <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} className='object-contain' />
            </div>
        </div>
    )
}

export default ShoeCard