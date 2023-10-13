const productForm = document.getElementById("form");
const productList = document.getElementById("productList");
const API = "http://localhost:3000/products";

setTimeout(() => {
  console.log("viec 1");
}, 3000);

// console.log("viec 2 cần kết qủa của việc 1 để có thể thực hiện");

// Vấn đề: làm thế nào để việc 2 chờ việc 1 giải quyết xong trước!

const editingProduct = null;

const fetchProducts = async () => {
  try {
    const response = await fetch(API, {
      method: "GET",
    });

    const data = await response.json();
    console.log(data);
    productList.innerHTML = "";
    data.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.innerHTML = `
      <div>
      <strong>Name: ${product.name}</strong>
      <strong>Price: ${product.price}</strong>
      <strong>Description: ${product.desc || "Đang cập nhật!"}  </strong>
      <button onclick="">Edit</button>
      <button onclick="">Delete</button>
      </div>
      <hr />
      `;
      productList.appendChild(productItem);
    });
  } catch (error) {
    console.log("Error fetch: ", error);
  }
};

// const validationForm = () => {
//   // Xu ly validate
// };

const performAction = async (apiEndpoint, method, data) => {
  try {
    const response = await fetch(apiEndpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    await response.json();
    fetchProducts();
    productForm.reset();
    editingProduct = null;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const addProduct = async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("desc").value;

  // if(!validationForm(name, price, desc)) {
  //   return;
  // }

  const newProduct = {
    name,
    price,
    desc,
  };
  const apiEndpoint = editingProduct ? `${API}/${editingProduct}` : API;
  const method = editingProduct ? "PUT" : "POST";

  try {
    // Hoặc là thêm sản phẩm mới, hoặc là sửa sản phẩm.
    await performAction(apiEndpoint, method, newProduct);
  } catch (error) {
    console.log("Error addproduct: ", error);
  }
};

productForm.addEventListener("submit", addProduct);

fetchProducts();
