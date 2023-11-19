import photo from "../assets/photo.jpg"
import mail_icon from "../assets/mail.svg"
import linkedin_icon from "../assets/linkedin_icon.svg"

export default function Info(){
    return (
        <info>
            <img src={photo} className="info--photo"></img>
            <h2 className="info--name">Dominic John Mondia</h2>
            <h3 className="info--title">Frontend Developer</h3>
            <div className="info--button-container">
                <button className="info--email-btn" onClick={() => {navigator.clipboard.writeText("dominic.john.mondia@eee.upd.edu.ph")}}>
                    <img src={mail_icon}></img>
                    Email
                </button>
                <a href="https://www.linkedin.com/in/dominic-john-mondia-598129209/" target="_blank">
                    <button className="info--linkedin-btn">
                        <img src={linkedin_icon}></img>
                        LinkedIn
                    </button>
                </a>
                
                
            </div>
        </info>
    )
}