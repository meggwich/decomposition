import Widget from "../widget/Widget";
import Search from "./Search";
import Navbar from "./Navbar";
import Advertisement from "../Advertisement";

const Main = () => {
    return (
        <main className='main-content-flex'>
            <img src="./src/assets/logo.png" alt="logo" style={{height:'300px'}}/>
            <div className="main-box">
                <Navbar/>
                <Search/>
                <Advertisement/>
                <div className="widgets-box">
                    <Widget children={ <img src="./src/assets/icon.jpg" style={ {width:'100px'} }/> } 
                    link='#' 
                    name='Погода' 
                    text='Смотрите на Яндексе'
                    />
                    <Widget 
                    link='#' 
                    name='Карта Германии' 
                    text='Смотрите на Яндексе'
                    />
                    <Widget
                    link='#' 
                    name='Эфир' 
                    text='Смотрите на Яндексе'
                    />
                    <Widget 
                    link='#' 
                    name='Посещаемое' 
                    text='Смотрите на Яндексе'
                    />
                    <Widget 
                    link='#' 
                    name='Телепрограмма' 
                    text='Смотрите на Яндексе'
                    />
                </div>
            </div>
        </main>
    );
}

export default Main