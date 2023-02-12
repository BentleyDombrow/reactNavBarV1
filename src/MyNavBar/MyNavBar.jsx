import './MyNavBar.css'
import MyNavBarLogo from './Components/MyNavBar-logo'
import CreateNavItem from './Components/MyNavBar-CreateNavItem'
import MyNavBarContact from './Components/MyNavBar-Contact'

const navbar = () => {

    return (
        <div className='MyNavBarContainer'>
            <MyNavBarLogo />

            <div className='NavItems'>
                <ul className='NavItemsList'>
                    <CreateNavItem itemName='Home' />

                    <CreateNavItem itemName='Features' />

                    <CreateNavItem itemName='Portfolio' />

                    <CreateNavItem itemName='Blog' />

                    <CreateNavItem itemName='Pricing' />
                </ul>

                <MyNavBarContact />
            </div>
        </div>
    );



}

export default navbar;