import CRUDService from "../services/CRUDService.js";

let getHomePage = (req, res) => {
  return res.send("Trang chủ hệ thống - 23110197 - Bùi Hải Dương");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  await CRUDService.createNewUser(req.body);
  return res.redirect("/get-crud");
};

let getFindAllCrud = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("users/findAllUser.ejs", { datalist: data });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    return res.render("users/editUser.ejs", { data: userData });
  } else {
    return res.send("Không tìm thấy User ID");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let data1 = await CRUDService.updateUser(data);
  return res.render("users/findAllUser.ejs", { datalist: data1 });
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.redirect("/get-crud");
  } else {
    return res.send("Không tìm thấy User");
  }
};

export default {
  getHomePage,
  getCRUD,
  postCRUD,
  getFindAllCrud,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
