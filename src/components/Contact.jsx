import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-title">
                <h5>— contact me</h5>
                <h2>🚀Let's collaborate </h2>
            </div>
            <div className="container">
                <div className="sub">
                    Got a question, proposal or project or want to work <br />
                    together on something? Feel free to reach out.
                </div>
                <FormArea />
            </div>
        </section>
    );
};

const FormArea = () => {
    const [status, setStatus] = React.useState('');

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus("SUCCESS");
                setTimeout(() => setStatus(""), 2000);
            } else {
                setStatus("ERROR");
                setTimeout(() => setStatus(""), 2000);
            }
        };
        xhr.send(data);
    };

    return (
        <>
            {status === "SUCCESS" && (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#1a1a1a",
                    padding: "2rem",
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
                    zIndex: 1000,
                    textAlign: "center",
                    border: "1px solid var(--mainColor)",
                    minWidth: "200px"
                }}>
                    <h3 style={{ color: "var(--mainColor)", margin: 0 }}>Submitted! 🚀</h3>
                </div>
            )}
            {status === "ERROR" && (
                <div style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#1a1a1a",
                    padding: "2rem",
                    borderRadius: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
                    zIndex: 1000,
                    textAlign: "center",
                    border: "1px solid red",
                    minWidth: "200px"
                }}>
                    <h3 style={{ color: "red", margin: 0 }}>Error!</h3>
                </div>
            )}
            <form
                onSubmit={submitForm}
                action="https://formspree.io/f/mdazwnaw"
                method="POST"
            >
                <div className="input-row">
                    <div className="side">
                        <label htmlFor="name">Your Name</label>
                        <input
                            placeholder="Enter Your name"
                            name="name"
                            id="name"
                            type="text"
                            required
                        />
                    </div>
                    <div className="side">
                        <label htmlFor="email">Your Email</label>
                        <input
                            placeholder="Enter Your email address"
                            name="email"
                            id="email"
                            type="email"
                            required
                        />
                    </div>
                </div>
                <div className="textarea">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Hi, I think we need you to work on this particular product. Reach out as soon as you can"
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message.</button>
            </form>
        </>
    );
};


export default Contact;
