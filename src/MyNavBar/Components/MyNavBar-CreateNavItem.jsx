

const CreateNavItem = props => {

    return(
        <>
              <li className={"NavItemLi " + props.itemName}>
                    <a className='NavItemA'>{props.itemName}</a>
                </li>
        </>
    );

}

export default CreateNavItem;