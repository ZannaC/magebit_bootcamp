import React, { useState } from "react";
import "../../../sass/app.css";

function PassValid() {
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordsMatch(event.target.value === repeatPassword);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
        setPasswordsMatch(event.target.value === password);
    };

    return (
        <>
            <div className="customer_details_comp">
                <label htmlFor="password_repeat">
                    Password<font color="red"> *</font>
                </label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <label htmlFor="password_repeat">
                    Repeat Password<font color="red"> *</font>
                </label>
                <input
                    type="password"
                    placeholder="Repeat password"
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                />
                {!passwordsMatch && <p>Passwords do not match.</p>}
            </div>
            <button
                type="submit"
                form="form"
                value="Place order"
                className="place_order_btn_comp"
                disabled={!passwordsMatch}
            >
                PLACE ORDER
            </button>
        </>
    );
}

export default PassValid;
