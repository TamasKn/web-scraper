import Spinner from '../../spinner/spinner'
import { FixedSizeList as List } from "react-window";

const Results = ({loader, data}) => {

    // React window helps to render large data
    const Items = ({ index, style }) => (
            <div key={index} style={style} className="result__list" >
                <div className="result__list-item">{data[index].key} : {data[index].value}</div>
            </div>
    )

    return (
        <div className="result__container">
            {
                (data.length > 0)
                    ? <h3>{data.length} distinct word has been scraped</h3>
                    : null
            }
            <section>
                {
                    (loader)
                        ? <Spinner/>
                        : (data)
                            ?
                        <List
                            width={800}
                            height={500}
                            itemCount={data.length}
                            itemSize={50}
                        >
                            {Items}
                        </List>

                            : null
                }
            </section>

        </div>
    )

}

export default Results

