import Headline from './Headline';
import Share from './Share';
import LinkItem from '../LinkItem';
import { headlines } from '../../assets/data/constants';
import { shares } from '../../assets/data/constants';
import { newsCategories } from '../../assets/data/constants';


const News = () => {
    return (
        <div className='news-box'>
            <nav className='news-navbar'>
                {newsCategories.map((item, index) => (
                        <LinkItem key={index} {...item} />
                    ))}
                <span className="date">31 июля, среда, 02:32</span>
            </nav>
            
            <div className='headliners'>
                {headlines.map((item, index) => (
                    <Headline key={index} {...item} />
                ))}
            </div>

            <div className='shares-box'>
            {shares.map((item, index) => (
                    <Share key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default News;