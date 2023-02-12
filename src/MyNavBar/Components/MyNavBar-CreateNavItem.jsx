

const CreateNavItem = props => {

    return(
        <>
              <li className={"NavItem " + props.itemName}>
                    <a className='NavItem NavItemHome'>{props.itemName}</a>
                </li>
        </>
    );

}

export default CreateNavItem;