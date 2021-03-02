import Spinner from '../../spinner/spinner'

const Results = () => {
    const showSpinner = false
    return(
        <section>
            Results
            {
                (showSpinner)
                ? <Spinner />
                : null
            }

        </section>
    )

}

export default Results

