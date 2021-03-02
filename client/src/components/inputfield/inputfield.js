const InputField = ({name, type, label, onChange, info}) => (
    <div className="inputfield__container">
        <div className="inputfield__info">
            <label htmlFor={name}>{label}</label>
            {
                (info !== undefined)
                    ? <span title={info}>!!!</span>
                    : null
            }
        </div>
        <input
            type={type}
            name={name}
            onChange={onChange}
        />
    </div>
)


export default InputField
