const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth, onPress }) => {
  return (
    <button onClick={onPress} className={`${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red text-white border-coral-red dark:text-slate-100'} ${fullWidth && 'w-full'} flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full`}>
        {label}
        {
            iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" />
        }
    </button>
  )
}

export default Button