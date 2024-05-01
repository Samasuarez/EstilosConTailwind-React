// import  { useState, useEffect } from "react";

// const GetCategory = ( ) => {
//   // const [inputValue, setInputValue] = useState("");
//   // const [categories, setCategories] = useState([]);

//   // useEffect(() => {
//   //   fetchCategories();
//   // }, []);

//   // const fetchCategories = () => {
//   //   fetch("https://fakestoreapi.com/products/categories")
//   //     .then((res) => res.json())
//   //     .then((json) => {
//   //       setCategories(json);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error al obtener las categorías:", error);
//   //     });
//   // };

//   // const handleInputChange = (event) => {
//   //   setInputValue(event.target.value);
//   // };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   if (inputValue.trim().length <= 1) return;

//   //   onCategoryChange(inputValue.trim());
//   //   setInputValue("");
//   // };
//   // fetch('https://fakestoreapi.com/products/categories')
//   // .then(res=>res.json())
//   // .then(json=>console.log(json))
//   // fetch('https://fakestoreapi.com/products/categories')
//   // .then(res => res.json())
//   // .then(categories => {
//   //   const container = document.getElementById('categoriesContainer');

//   //   categories.forEach(category => {
//   //     const button = document.createElement('button');
//   //     button.innerText = category;
//   //     button.addEventListener('click', () => {
//   //       console.log(category);
//   //     });

//   //     container.appendChild(button);
//   //   });
//   // })
//   // .catch(error => {
//   //   console.error('Error:', error);
//   // });
//   fetch('https://fakestoreapi.com/products/categories')
//   .then(res => res.json())
//   .then(categories => {
//     const container = document.getElementById('categoriesContainer');

//     categories.forEach(category => {
//       const button = document.createElement('button');
//       button.innerText = category;
//       button.addEventListener('click', () => {
//         fetch(`https://fakestoreapi.com/products/category/jewelery`)
//           .then(res => res.json())
//           .then(data => {
//             // Aquí puedes usar los datos recibidos en el componente del navbar
//             console.log(data);
//           })
//           .catch(error => {
//             console.error('Error:', error);
//           });
//       });

//       container.appendChild(button);
//     });
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

  
//   return (
//     // <form onSubmit={handleSubmit}>
//     //   {/* <input
//     //     type="text"
//     //     placeholder="Buscar Gif"
//     //     value={inputValue}
//     //     onChange={handleInputChange}
//     //   /> */}
//     //   <select value={inputValue} onChange={handleInputChange}>
//     //     {categories.map((category) => (
//     //       <option key={category} value={category}>
//     //         {category}
//     //       </option>
//     //     ))}
//     //   </select>
//     //   <button type="submit">Buscar</button>
//     // </form><
//     <h1>{category}</h1>
//   );
// };
// export default GetCategory;
