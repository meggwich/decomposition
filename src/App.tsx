import './App.css'
import News from './components/news/News'
import Widget from './components/widget/Widget'
import Main from './components/main/Main'

function App() {

  return (
    <>
      <div className='content-box'>
        <News/>
        <Widget children={ <img src="./src/assets/icon.jpg" style={ {width:'100px'} }/> } 
        link='#' 
        name='Работа над ошибками' 
        text='Смотрите на Яндексе и запоминайте'/>
      </div>
      <Main/>
    </>
  )
}

export default App
