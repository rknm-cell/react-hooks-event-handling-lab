// Code Keypad Component Here

function Keypad (){
    function passwordInput(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={passwordInput} type="password" />
             
        </div>
    )
}

export default Keypad;