import React from "react";
import "react-phone-input-2/lib/style.css";
import ReactPhoneInput from "react-phone-input-2";

function PhoneNum() {
    return (
        <div>
            <ReactPhoneInput
                defaultCountry={"us"}
                inputStyle={{
                    width: "100%",
                    borderColor: "black",
                    borderRadius: "3px",
                    maxHeight: "25px",
                }}
                containerStyle={{
                    borderColor: "black",
                }}
            />
        </div>
    );
}
export default PhoneNum;
