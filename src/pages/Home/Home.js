import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  // state danh sách film
  state = {
    arrPhim: [],
  };

  loadPhim = () => {
    // dùng axios gọi t=lấy thông tin từ backend về qua api
    const promise = axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim",
      method: "GET",
    });
    // xử lý thành công
    promise.then((result) => {
      console.log("result", result.data);
      this.setState({
        arrPhim: result.data,
      });
    });
    // xử lý khi request lỗi
    promise.catch((err) => {
      console.log("err", err.response.data);
    });
  };

  renderPhim = () => {
    return this.state.arrPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        Home
        <br />
        <button onClick={()=>{
            this.loadPhim()
        }} className="btn btn-success">
          Lấy danh sách phim
        </button>
        <div className="text-center display-4">Danh sách phim</div>
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }

  // hàm giống hàm render của react component kế thừa nên có
  componentDidMount() {
    // các api muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
    this.loadPhim();
  }
}
