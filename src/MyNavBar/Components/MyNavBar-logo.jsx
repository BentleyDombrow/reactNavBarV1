import './MyNavBar-logo.css'


const MyNavBarLogo = () => {

    return(
        <div className='imageContainer'>
            <img src={require('../../discord-mascot.png')} alt='Company Logo' />
        </div>
    );

}

export default MyNavBarLogo