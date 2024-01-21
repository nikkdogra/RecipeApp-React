
const Spinner = ({ error }) => {
    return (
        <div className={`text-center text-${error ? 'danger' : 'secondary'}`}>

            <div className="spinner spinner-border" role="status"></div>
            <p className="fs-4 error">
                {
                    error
                        ?
                        error
                        :
                        'Please Wait!'
                }
            </p>
        </div>
    )
}

export default Spinner
