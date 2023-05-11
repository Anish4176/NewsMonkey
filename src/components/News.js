import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const toUppercase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    document.title = `${toUppercase(props.category)}- NewsMonkey`

    const update = async () => {
        props.setprogress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
        setloading(true)
        let data = await fetch(url);
        props.setprogress(30)
        let parseddata = await data.json();
        props.setprogress(60)
        setarticles(parseddata.articles);
        setloading(false);
        settotalResults(parseddata.totalResults);

        props.setprogress(100)
    }
    useEffect(() => {   //in place of componentDidMount 
        update();
    }, [])


    // const handlenext = async () => {
    //     setpage(page+1)
    //     // this.setState({ page: this.state.page + 1 })
    //     update();

    // }
    // const handleprevious = async () => {
    //     setpage(page-1)
    //     // this.setState({ page: this.state.page + -1 })
    //     update();
    // }

    const fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
        setpage(page + 1)
        let data = await fetch(url);
        let parseddata = await data.json();
        setarticles(articles.concat(parseddata.articles))
        settotalResults(parseddata.totalResults)
    }

    return (
        <>
            <h1 className='text-center' style={{ marginTop: "6.5rem" }}>NewsMonkey- Top <span className="text-success " > {toUppercase(props.category)} </span> Headlines</h1>
            <hr className=' w-50 mx-auto' style={{ marginBottom: "1.5rem" }} />
            {loading && <Loading />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
            >
                <div className="container">
                    <div className="row ">
                        {articles && articles.map((element, index) => {
                            return <div className="col-md-4 " key={`${element.url}-${index}`}>
                                <Newsitem imgurl={element.urlToImage} title={element.title ? element.title.slice(0, 84) : ""} description={element.description ? element.description.slice(0, 100) : ""} newsid={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* </div> */}
            {/* <div className="d-flex justify-content-between ">
                        <button disabled={this.state.page <= 1} onClick={this.handleprevious} type="button" className="btn btn-primary">&laquo; Previous</button>
                        <button disabled={this.state.page >= Math.ceil(this.state.totalResults / props.pageSize)} type="button" onClick={this.handlenext} className="btn btn-primary">Next &raquo;</button>
                    </div> */}


        </>
    )
}

News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 1
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}

export default News

