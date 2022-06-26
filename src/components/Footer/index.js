const Footer = () => {
    return (   
        <div className='overlay'>
            <div>
                <a className='footer move-right2' href = "#Terms">Terms and Conditions | </a>   
                <a className='footer' href = "#NIC">NIC Mail  </a>
            </div>
            <div>
                <a className='footer move-right2' href = "#Policies">Newspapers | </a>
                <a className='footer' href = "#data">india.gov.in  </a>
            </div>
            <div>
                <a className='footer move-right2' href = "#Policies">Website Policies | </a>
                <a className='footer' href = "#data">data.gov.in  </a>
            </div>
            <div>            
                <a className='footer move-right2' href = "#Policies">Feedback | </a>
                <a className='footer' href = "#data">Contact Us |  </a>
                <a className='footer' href = "#data">Visitor's Center  </a>
                {/* <p className='move-right2'>
                    This site is designed and hosted by National Information Centre
                </p> */}
            </div>
        </div>
        )
    }
    
export default Footer