import './MyNavBar-logo.css'


const MyNavBarLogo = () => {

    return(
        <div className='imageContainer'>
            <img src={require('../../assets/templogo.png')} alt='Company Logo' />
        </div>
    );

}

export default MyNavBarLogo