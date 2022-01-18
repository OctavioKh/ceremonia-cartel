// import React, { Component } from "react";

// import MailchimpSubscribe from "./subscribir";

// // a basic form
// const CustomForm = ({ status, message, onValidated }) => {
//   let email, name;
//   const submit = () =>
//     email &&
//     name &&
//     email.value.indexOf("@") > -1 &&
//     onValidated({
        
//       EMAIL: email.value,
//       NAME: name.value
//     });
 

//   return (
//     <div
//       style={{
//         background: "#efefef",
//         borderRadius: 2,
//         padding: 10,
//         display: "inline-block"
//       }}
//     >
//       {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//       {status === "error" && (
//         <div
//           style={{ color: "red" }}
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )}
//       {status === "success" && (
//         <div
//           style={{ color: "green" }}
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )}
//       <input
//         style={{ fontSize: "2em", padding: 5 }}
//         ref={node => (name = node)}
//         type="text"
//         placeholder="Your name"
//       />
//       <br />
//       <input
//         style={{ fontSize: "2em", padding: 5 }}
//         ref={node => (email = node)}
//         type="email"
//         placeholder="Your email"
//       />
//       <br />
//       <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
//         Submit
//       </button>
//     </div>
//   );
// };

// class Demo extends Component {
//   render() {
//     const url =
//     "https://eco.us6.list-manage.com/subscribe/post";
//     return (
//       <div>
        
//         <h2>Default Form</h2>
//         {/* <MailchimpSubscribe url={url} /> */}
//         <h2>Custom Form</h2>
//         <MailchimpSubscribe
//           url={url} method={POST}
//           render={({ subscribe, status, message }) => (
//             <CustomForm
//               status={status}
//               message={message}
//               onValidated={formData => subscribe(formData)}
//             />
//           )}
//         />
//       </div>
//     );
//   }
// }

// export default Demo;