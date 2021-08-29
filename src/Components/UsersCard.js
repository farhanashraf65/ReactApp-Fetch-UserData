import "./UsersCard.css"
const UserCard = ({ email, first_name, last_name, avatar }) => {
    return(
        <div className="box-card column-6 column-s-6">
            <div className="card"> 
                <div className='row'>
                    <div className='column-4 column-s-12'>
                        <img src={avatar} alt="Avatar" style={{width: "100%"}}style={{height: "100%"}}/>
                    </div>
                    <div className='column-8 column-s-12'>
                        <div className="box">
                            <span><b>{ first_name +' '+ last_name }</b></span>
                            <p className='email'>{ email }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;