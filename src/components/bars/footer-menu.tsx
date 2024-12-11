import './footer-menu.css'

const links = [
    {
        title:'Home',
        icon:'bi bi-house-door',
        url:''
    },
    {
        title:'Favorites',
        icon:'bi bi-heart',
        url:''
    },
    {
        title:'Sell',
        icon:'bi bi-plus-circle',
        url:''
    },
    {
        title:'Messages',
        icon:'bi bi-envelope',
        url:''
    },
    {
        title:'Profile',
        icon:'bi bi-person-circle',
        url:''
    }

]
const FooterMenu = ()=>{
    return (
<div className="contain w-100 bg-light shadow-sm p-3 d-flex justify-content-between text-center align-items-center px-4" style={{minHeight:'60px'}}>
{
    links.map((link)=>(
    <div role='button' className='' style={{minWidth:'45px'}}>
        <i className={link.icon} style={{fontSize:'1.2em'}}></i>
    </div>
    ))
}
</div>
    )
}
export default FooterMenu;