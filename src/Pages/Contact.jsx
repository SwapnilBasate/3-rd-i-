import './Contact.css';

export default function Contact(){
    return(
        <>
      
      <div class="contact">
        <form>
            <div class="input-field">
                <label>Fullname</label>
                <input type="text"/>
            </div>
            <div class="input-field">
                <label>Email</label>
                <input type="email"/>
            </div>
            <div class="input-field">
                <label>Mobile No</label>
                <input type="number"/>
            </div>
            <input type="submit" value="Contact Now"/>
        </form>
    </div>

        </>
    )
}


 
