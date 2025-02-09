import Logo from '../../components/Home/Logo'

const Home = () => {
    console.log('home randeriza')
    return (
        <>
            <div className='Home'>
                <Logo /> 
            </div>
            <h1>Libreria</h1>
            <h2>El rincón de la sabiduría</h2>
        </>
    )
}

export default Home