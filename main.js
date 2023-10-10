// import { products as data } from "./datas.js";
import { default as data } from "./datas.js";

console.log("hello everyone!");
const app = document.getElementById("app");
const myInfor = {
  name: "Hoàng Tèo",
  age: 32,
};

console.log(data);
// Destructuring (object, array)
// const name = myInfor.name;
// const age = myInfor.age;

const { name, age } = myInfor;

const myStudents = ["Tuan", "Minh", "Duc", "Thang"];
const [nhat, nhi, ba] = myStudents;
console.log(nhi);

// Template string ``
app.innerHTML = `
  <div class="infor">
    <h2>${name}</h2>
    <p>Tuổi: ${age}</p>
  </div>

`;

// Rest, Spread...
// - 1 cái gom lại, 1 cái rải ra
// - rest khai báo khi chưa biết số lượng tham số, spread viết phần còn lại

console.log(1, 2, 3, 4, "hello", [1, 2, 2]);

// built-in function: console, alert, prompt, confirm...
// Rest là toán tử gom các tham số, đặc biệt là khi sử dụng truyền tham số vào hàm
function welcome([ten1, ten2, ...names]) {
  // dung for loop de in ra nhieu loi chao neu nhu tham so nhan vao la mot mang
  console.log(`Xin chao dai bieu ${ten1}`);
  for (let i = 0; i < names.length; i++) {
    console.log(`Xin chao ${names[i]}`);
  }
}

welcome(["hoang", "bao", "tuan"]);

const WD18102 = ["Thanh", "Mai"];
const WD18103 = ["Chuc", "Ma"];
const lopGom = WD18102.concat(WD18103);
// [] + {} + number + string -> error,
console.log(lopGom);
console.log(WD18102 + WD18103);

// Spread - còn gọi là toán tử rải, có thể xuất hiện nhiều lần trong 1 lần khai báo, ở nhiều vị trí khác nhau.
const lopGom2 = [...WD18102, "Toi la ai", ...WD18103];
console.log(lopGom2);

// Default value
function hello(name = "bạn") {
  console.warn(`Xin chao ${name}`);
}
hello();

// const tinhTrang = "docthan";
// if (tinhTrang === "docthan") {
//   console.log("20/10 này ở nhà code");
//   // multi code
// } else {
//   console.log("20/10 mua quà và đi chơi!");
// }

// clean code -> code sạch
// tinhTrang
//   ? console.log("20/10 này ở nhà code")
//   : console.log("20/10 mua quà và đi chơi!");
