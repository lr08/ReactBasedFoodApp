import React from "react";

// Implicit return with arrow function and destructring the props into there own variable
const Header = ({tag})=>
  (
      <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        {/* Props is like a bus and state is like  home where dat is there */}
        <span>Fresh {tag} Indian Food</span>
      </h3>
    </header>
  );


// // Implicit return with arrow function
// const Header = props=>
//   (
//       <header className="top">
//       <h1>
//         Catch
//         <span className="ofThe">
//           <span className="of">Of</span>
//           <span className="the">The</span>
//         </span>
//         Day
//       </h1>
//       <h3 className="tagline">
//         {/* Props is like a bus and state is like  home where dat is there */}
//         <span>Fresh {props.tag} Indian Food</span>
//       </h3>
//     </header>
//   );

// function Header(props){
//     return (
//         <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           {/* Props is like a bus and state is like  home where dat is there */}
//           <span>Fresh {props.tag} Indian Food</span>
//         </h3>
//       </header>
//     );
//   }

// class Header extends React.Component {
//   render() {
//     return (
//         <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           {/* Props is like a bus and state is like  home where dat is there */}
//           <span>Fresh {this.props.tag} Indian Food</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;