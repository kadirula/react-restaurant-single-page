
const Heading = ({ title, subtitle }) => {
    return (
        <div className="heading">
            <span>{subtitle}</span>
            <h3>{title}</h3>
        </div>
    )
}

export default Heading